import { styled } from "@mui/material/styles";

export const StyledContent = styled("div")(({ theme }) => ({
  width: "calc(100vw - 350px)",
  padding: "160px 140px 100px 100px",
  position: "relative",

  "[data-lined]": {
    div: {
      display: "flex",
      alignItems: "center",
      fontSize: 20,
      margin: "8px 58px 8px 0",

      "&:before": {
        content: '""',
        height: 2,
        width: 22,
        marginLeft: 14,
        display: "block",
        background: theme.palette.text.primary,
      },
    },
  },

  "[data-contacts]": {
    fontSize: 20,

    a: {
      display: "flex",
      alignItems: "center",

      ".svg-color": { width: 30, height: 30 },

      div: {
        marginRight: 8,
        direction: "ltr",
      },

      "&:first-of-type": {
        marginBottom: 12,
      },
    },
  },
}));

export const StyledShapes = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  right: 0,

  "[data-shapes]": {
    position: "absolute",
    left: 0,
    top: 0, // in home-hello it's bottom:0 because shapes designed from bottom
  },

  '[data-id="c_1"]': {
    top: 303,
    left: 0,
  },
  '[data-id="c_2"]': {
    top: 638,
    left: 340,
  },
  '[data-id="c_3"]': {
    top: 341,
    left: 341,
  },
}));
