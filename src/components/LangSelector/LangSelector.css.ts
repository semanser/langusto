import { gray } from "@radix-ui/colors";
import { createVar, style } from "@vanilla-extract/css";

export const sizeVar = createVar();

export const wrapperStyles = style({
  maxWidth: 450,
  margin: "0 auto",
  marginTop: 20,
  fontSize: 14,
  color: gray.gray10,
  display: "flex",
});

export const selectLanguageStyles = style({
  border: `1px solid transparent`,
  fontSize: 13,
  color: gray.gray10,
  padding: 10,
  borderRadius: 6,
  backgroundColor: "transparent",
  cursor: "pointer",
  transition: "all 0.2s",

  ":hover": {
    backgroundColor: gray.gray2,
    border: `1px solid ${gray.gray3}`,
    color: gray.gray11,
  },
});
