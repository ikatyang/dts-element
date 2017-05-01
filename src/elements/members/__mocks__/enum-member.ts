import {Stack} from '../../../stack';
import {Member} from '../../member';

export class EnumMember extends Member<any, any> {

  public get default_parameters(): any {
    return {};
  }

  public _emit(_stack: Stack, fn: (value: number | null) => number): string {
    const {owned} = this.parameters;
    return `[EnumMember ${owned.parameters.name} = ${fn(this.parameters.value)}]`;
  }

}
