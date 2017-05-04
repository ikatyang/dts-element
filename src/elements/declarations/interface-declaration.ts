import {emit_export} from '../../helpers/emit-export';
import {emit_generics} from '../../helpers/emit-generics';
import {emit_members} from '../../helpers/emit-members';
import {Stack} from '../../stack';
import {Declaration, IDeclarationOptionalParameters} from '../declaration';
import {ObjectMember} from '../members/object-member';
import {GenericType} from '../types/generic-type';

export interface IInterfaceDeclarationRequiredParameters {
  name: string;
}

export interface IInterfaceDeclarationOptionalParameters {
  generics: GenericType[];
  members: ObjectMember[];
  export: boolean;
}

/**
 * ```ts
 * interface some_interface_name {
 *   // some object members
 * }
 * ```
 */
export class InterfaceDeclaration
    extends Declaration<IInterfaceDeclarationRequiredParameters, IInterfaceDeclarationOptionalParameters> {

  private _instance_of_interface_declaration: true;

  public get default_parameters(): IDeclarationOptionalParameters & IInterfaceDeclarationOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      generics: [],
      members: [],
      export: false,
    });
  }

  public _emit_raw(stack: Stack): string {
    const {name, members, generics} = this.parameters;
    const generic = emit_generics(generics, stack, true);
    const an_export = emit_export(this.parameters.export, stack);
    return `${an_export}interface ${name}${generic} ${emit_members(members, stack)}`;
  }

}
