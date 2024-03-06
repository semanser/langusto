import { gray } from "@radix-ui/colors";
import { globalStyle, style } from "@vanilla-extract/css";

export const sourceCodeStyles = style({
  display: "flex",
  justifyContent: "flex-end",
});

export const githubLinkStyles = style({
  display: "flex",
  gap: 6,
  textDecoration: "none",
  color: gray.gray11,
  fontSize: 13,
  padding: 6,
  borderRadius: 4,
  border: `1px solid transparent`,
  margin: 6,

  ":hover": {
    backgroundColor: gray.gray2,
    border: `1px solid ${gray.gray4}`,
  },
});

globalStyle(`${sourceCodeStyles} img`, {
  width: 16,
});

export const wrapperStyles = style({
  maxWidth: "450px",
  width: "90%",
  margin: "0 auto",
  marginTop: 180,
});

export const logoStyles = style({
  display: "block",
  maxWidth: 100,
  margin: "0 auto",
});
