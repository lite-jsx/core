import { NextFunction, Request, Response } from "express";

/**
 * This namespace represents the public API of the LiteJSX library
 */
declare namespace LiteJSX {
  /**
   * Represents the possible types of children that can be passed to the h() function
   */
  type Child =
    | string
    | number
    | boolean
    | null
    | undefined
    | ChildArray
    | Component;

  /**
   * Represents an array of children elements
   */
  interface ChildArray extends Array<Child> {}

  /**
   * Represents a collection of attributes that can be passed to an HTML element
   */
  interface Attributes {
    [propName: string]: any;
  }

  /**
   * Represents a component function that can be passed to the h() function as the tag parameter
   *
   * @typeparam P - The type of the component props
   */
  interface Component<P = Attributes> {
    (props: P & { children?: Child }): string;
  }

  /**
   * This is the main function of the LiteJSX library, used to create HTML elements
   *
   * @param tag - The tag name of the HTML element, or a component function
   * @param props - The attributes to set on the HTML element, or the props to pass to the component function
   * @param children - An array of children elements to add to the HTML element, or to pass to the component function
   * @example
   * const { h } = require("lite-jsx");
   * const Home = ({ message }) => (
   *   <div>
   *     <h1>{message}</h1>
   *   </div>
   * );
   */
  function h(
    tag: string | Component,
    props?: Attributes | undefined | null,
    ...children: ChildArray
  ): string;

  /**
   * Middleware that uses lite-jsx to render JSX templates in an Express application.
   *
   * @param req The Express request object.
   * @param res The Express response object.
   * @param next The Express next function.
   * @returns {void}
   * @example
   * const express = require("express");
   * const app = express();
   * const liteJsx = require("lite-jsx");
   * const Home = require("./home");
   *
   * // Use the middleware to enable lite-jsx rendering in the Express app.
   * app.use(liteJsx.__express);
   *
   * app.get("/", (req, res) => {
   *   const data = { message: "Hello, World!" };
   *   res.render(Home, data);
   * });
   *
   * app.listen(3000, () => {
   *   console.log("Example app listening on port 3000!");
   * });
   */
  function __express(req: Request, res: Response, next: NextFunction): void;
}

/**
 * This line exports the LiteJSX namespace as the default export of the module
 */
export = LiteJSX;
