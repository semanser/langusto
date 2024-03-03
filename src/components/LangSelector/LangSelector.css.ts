import { gray } from "@radix-ui/colors";
import { createVar, style } from "@vanilla-extract/css";

export const sizeVar = createVar();

export const wrapperStyles = style({
  maxWidth: 450,
  margin: "0 auto",
  marginTop: 40,
  fontSize: 14,
  color: gray.gray10,
  display: "flex",
});

export const selectLanguageStyles = style({
  border: `1px solid ${gray.gray3}`,
  color: gray.gray12,
  padding: 10,
  borderRadius: 6,
  backgroundColor: gray.gray2,
  cursor: "pointer",

  ":hover": {
    backgroundColor: gray.gray3,
  },
});
