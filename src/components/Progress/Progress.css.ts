import { gray, green } from "@radix-ui/colors";
import { createVar, style } from "@vanilla-extract/css";

export const sizeVar = createVar();

export const wrapperStyles = style({
  margin: "0 auto",
  marginTop: 120,
  fontSize: 14,
  color: gray.gray10,
  textAlign: "center",
});

export const progressBarWrapperStyles = style({
  backgroundColor: green.green4,
  width: "100%",
  height: 10,
  marginTop: 5,
  borderRadius: 3,
});

export const progressBarStyles = style({
  backgroundColor: green.green8,
  width: sizeVar,
  height: "100%",
  borderRadius: 3,
});
