type SpacingProps = {
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  m?: number;
  pt?: number;
  pl?: number;
  pb?: number;
  pr?: number;
  p?: number;
  height?: number | string;
  width?: number | string;
};

const spacingRest = (rest: SpacingProps | any) => {
  return {
    mt: rest.mt,
    mb: rest.mb
  };
};
export default spacingRest;
