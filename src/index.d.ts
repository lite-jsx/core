declare namespace JSX {
  interface Element {}

  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

type Child = string | number | boolean | null | undefined | ChildArray;

interface ChildArray extends Array<Child> {}

interface Attributes {
  [propName: string]: any;
}

interface FunctionalComponent<P = Attributes> {
  (props: P & { children?: Child }): JSX.Element;
}

interface Component<P = Attributes> {
  props: P & { children?: Child };
  render(): JSX.Element;
}

declare function h(
  tag: string | FunctionalComponent | typeof Component,
  props?: Attributes,
  ...children: Child[]
): JSX.Element;
