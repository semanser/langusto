import { gray } from "@radix-ui/colors";
import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  color: gray.gray12,
});

globalStyle("*", {
  fontFamily: "Inter var, sans-serif",
  WebkitFontSmoothing: "antialiased",
  boxSizing: "border-box",
});
