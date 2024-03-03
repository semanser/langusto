import { blue, gray } from "@radix-ui/colors";
import { globalStyle, style } from "@vanilla-extract/css";

import { font } from "../../font.css";

export const triggerStyles = style({
  all: "unset",
  borderRadius: 6,
  width: "100%",
});

export const dropdownMenuContentStyles = style({
  minWidth: 220,
  backgroundColor: gray.gray3,
  border: `1px solid ${gray.gray4}`,
  borderRadius: 6,
  padding: 3,
  boxShadow: `0 0 10px 2px #12121187`,
});

export const dropdownMenuSubContentStyles = dropdownMenuContentStyles;

export const dropdownMenuItemStyles = style([
  font.textSmMedium,
  {
    display: "flex",
    borderRadius: 3,
    alignItems: "center",
    height: 32,
    padding: "0 3px",
    position: "relative",
    paddingLeft: 32,
    userSelect: "none",
    outline: "none",
    color: gray.gray12,
    cursor: "pointer",

    selectors: {
      "&[data-highlighted]": {
        backgroundColor: gray.gray4,
      },
    },
  },
]);

export const dropdownMenuItemIconStyles = style({
  position: "absolute",
  left: 8,
  top: 8,
  color: gray.gray9,
  width: 16,
  height: 16,
});

globalStyle(`${dropdownMenuItemStyles}:hover ${dropdownMenuItemIconStyles}`, {
  color: blue.blue9,
});

export const dropdownMenuRightSlotStyles = style({
  display: "flex",
  marginLeft: "auto",
  paddingLeft: 20,
  top: 4,
  color: gray.gray9,
});
