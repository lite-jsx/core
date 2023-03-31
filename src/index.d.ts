declare namespace LiteJSX {
  type Child = string | number | boolean | null | undefined | ChildArray;

  interface ChildArray extends Array<Child> {}

  interface Attributes {
    [propName: string]: any;
  }

  interface Component<P = Attributes> {
    (props: P & { children?: Child }): string;
  }

  function h(
    tag: string | Component,
    props?: Attributes | undefined | null,
    ...children: ChildArray
  ): string;
}

export = LiteJSX;
