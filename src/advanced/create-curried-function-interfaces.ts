import {FunctionDeclaration} from '../elements/declarations/function-declaration';
import {
  InterfaceDeclaration,
  IInterfaceDeclarationOptionalParameters,
} from '../elements/declarations/interface-declaration';
import {ObjectMember} from '../elements/members/object-member';
import {Parameter} from '../elements/parameter';
import {Type} from '../elements/type';
import {FunctionType} from '../elements/types/function-type';
import {GenericType} from '../elements/types/generic-type';
import {InterfaceType} from '../elements/types/interface-type';

export interface ICreateCurriedFunctionInterfacesRequiredParameters {
  max_curry_level: number;
}

export interface ICreateCurriedFunctionInterfacesOptionalParameters {
  options: Partial<IInterfaceDeclarationOptionalParameters>;
  placeholder: Type | null;
  generic_name_for_return_type: string;
  generate_generic_name(index: number): string;
  generate_parameter_name(index: number): string;
  generate_placeholder_name(index: number): string;
  generate_interface_name(curry_level: number): string;
}

export type ICreateCurriedFunctionInterfacesParameters =
  ICreateCurriedFunctionInterfacesRequiredParameters & Partial<ICreateCurriedFunctionInterfacesOptionalParameters>;

export const create_curried_function_interfaces = ({
      max_curry_level,
      options = {},
      placeholder = null,
      generic_name_for_return_type = 'R',
      generate_generic_name = (index: number): string => `T${index + 1}`,
      generate_parameter_name = (index: number): string => `v${index + 1}`,
      generate_placeholder_name = (index: number): string => `_${index + 1}`,
      generate_interface_name = (curry_level: number): string => `CurriedFunction${curry_level}`,
    }: ICreateCurriedFunctionInterfacesParameters): InterfaceDeclaration[] => {
  const generic_return = new GenericType({name: generic_name_for_return_type});
  const interfaces = [...new Array(max_curry_level)]
    .map((_value: any, index: number) =>
      new InterfaceDeclaration({...options, name: generate_interface_name(index + 1)}));
  const generics = [...new Array(max_curry_level)]
    .map((_value: any, index: number) =>
      new GenericType({name: generate_generic_name(index)}));
  const parameters = [...new Array(max_curry_level)]
    .map((_value: any, index: number) =>
      new Parameter({name: generate_parameter_name(index), type: generics[index]}));
  const placeholder_parameters = (placeholder === null)
    ? null
    : [...new Array(max_curry_level)]
      .map((_value: any, index: number) =>
        new Parameter({name: generate_placeholder_name(index), type: placeholder}));
  interfaces.forEach((an_interface: InterfaceDeclaration, index: number) => {
    const curry_level = index + 1;
    an_interface.parameters.generics.push(...generics.slice(0, curry_level), generic_return);

    // tslint:disable-next-line:only-arrow-functions
    (function recursive(last_parameters: Parameter[], rest_parameters: Parameter[]): void {
      if (last_parameters.length > 0 && last_parameters[last_parameters.length - 1].parameters.type !== placeholder) {
        an_interface.parameters.members.push(new ObjectMember({
          owned: new FunctionDeclaration({
            name: null,
            type: new FunctionType({
              parameters: last_parameters,
              return: (rest_parameters.length === 0)
                ? generic_return
                : new InterfaceType({
                  owned: interfaces[rest_parameters.length - 1],
                  generics: [
                    ...rest_parameters.map((parameter: Parameter) => parameter.parameters.type),
                    generic_return,
                  ],
                }),
            }),
          }),
        }));
      }
      const current_index = last_parameters.length;
      const current_parameter = parameters[current_index];
      if (current_index < curry_level) {
        recursive(
          [...last_parameters, current_parameter],
          rest_parameters.filter((parameter: Parameter) => (parameter !== current_parameter)),
        );
        if (placeholder_parameters !== null) {
          recursive(
            [...last_parameters, placeholder_parameters[current_index]],
            rest_parameters,
          );
        }
      }
    })([], parameters.slice(0, index + 1));

    an_interface.parameters.members.sort((member1: ObjectMember, member2: ObjectMember) => {
      const function_type_1: FunctionType = member1.parameters.owned.parameters.type;
      const function_type_2: FunctionType = member2.parameters.owned.parameters.type;
      return function_type_2.parameters.parameters.length - function_type_1.parameters.parameters.length;
    });
  });

  return interfaces;
};
