export const mixin_class = (target: any, sources: any[]): void => {
  sources.forEach((source: any) => {
    Object.getOwnPropertyNames(source.prototype).forEach((name: string) => {
      target.prototype[name] = source.prototype[name];
    });
  });
};
