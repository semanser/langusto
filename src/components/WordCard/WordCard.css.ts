import { blue, green, red, yellow } from "@radix-ui/colors";
import { style, styleVariants } from "@vanilla-extract/css";

export const wrapperStyles = style({
  maxWidth: 450,
  margin: "0 auto",
  marginTop: 150,
});

export const questionStyles = style({
  fontSize: 14,
  fontWeight: 600,
  marginBottom: 14,
  color: blue.blue9,
});

export const wordStyles = style({
  fontSize: 24,
  fontWeight: 600,
  backgroundColor: blue.blue5,
  borderRadius: 10,
  border: `1px solid ${blue.blue7}`,
  padding: 20,
  height: 75,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const emojiStyles = style({
  display: "block",
  fontSize: 18,
  marginRight: 5,
  backgroundColor: blue.blue7,
  padding: 5,
  borderRadius: 5,
  width: 30,
  height: 30,
});

export const answerStyles = style({
  color: blue.blue10,
  display: "flex",
  alignItems: "center",
});

export const buttonsStyles = style({
  display: "flex",
  gap: 10,
  marginTop: 20,
});

export const buttonBase = style({
  flex: 1,
  padding: "10px 20px",
  border: "none",
  fontWeight: 600,
  cursor: "pointer",
  borderRadius: 5,
});

export const buttonVariant = styleVariants({
  Yes: [
    buttonBase,
    {
      backgroundColor: green.green5,
      color: green.green11,

      ":hover": {
        backgroundColor: green.green6,
      },
    },
  ],
  No: [
    buttonBase,
    {
      backgroundColor: red.red5,
      color: red.red11,
      ":hover": {
        backgroundColor: red.red6,
      },
    },
  ],
});
