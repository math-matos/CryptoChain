import { CSSProperties, ReactNode } from "react";

interface IFlex {
  children?: ReactNode;
  direction?: "row" | "column";
  justifyContent?: any;
  alignItems?: any;
  width?: any;
  height?: any;
  minWidth?: any;
  minHeight?: any;
  maxWidth?: any;
  maxHeight?: any;
  style?: CSSProperties;
}

export default IFlex;
