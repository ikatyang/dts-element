import {Element} from '../../element';

export abstract class Declaration extends Element<any, any> {

  public get default_declaration_parameters(): any {
    return {};
  }

  public get jsdoc(): string {
    return '[JSDoc]\n';
  }

}
