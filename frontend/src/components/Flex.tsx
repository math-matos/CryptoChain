import { Box as MuiBox } from "@mui/material";
import IFlex from "../domain/usecases/IFlex";

export default function Flex({
  children,
  direction,
  justifyContent,
  alignItems,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  style,
  ...rest
}: IFlex) {
  return (
    <MuiBox
      style={{
        display: "flex",
        flexDirection: direction,
        justifyContent,
        alignItems,
        width,
        height,
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
        ...style
      }}
      {...rest}>
      {children}
    </MuiBox>
  );
}

Flex.defaultProps = {
  direction: "row",
  alignItems: "start",
  justifyContent: "start"
};
