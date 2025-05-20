import { TAN } from "@/constants";
import { keyframes, styled } from "@mui/material/styles";

export const StyledContent = styled("div")(({ theme }) => ({
  padding: "140px 140px 100px 100px",
  position: "relative",
}));

export const StyledRow = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginTop: 20,

  ">div:first-of-type": {
    position: "relative",
    color: "#ed6c02",
    width: 64,
    height: 64,

    ">div": {
      position: "absolute",
      left: 0,
      top: 32 - 12,
      transformOrigin: "32px center",
      display: "flex",
    },
  },

  ">div:last-of-type": {
    display: "flex",
    marginRight: 14,
    color: theme.palette.primary.main,
  },
}));

export const StyledShapes = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  right: 0,

  "[data-shapes-1]": {
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 0,
    right: 0,

    ">div:first-of-type": {
      position: "absolute",
      height: 750 / TAN,
      width: 750,
      bottom: 0,
      left: 0,
      background: "#5b46cc",

      "&:before": {
        content: '""',
        position: "absolute",
        height: "90%",
        width: "90%",
        top: 0,
        right: 0,
        background: "white",
        clipPath: "polygon(0 0, 100% 100%, 100% 0)",
      },
    },
  },

  "[data-shapes-2]": {
    position: "absolute",
    left: 0,
    bottom: 0,
  },

  '[data-id="c_1"]': {
    top: -309,
    left: 260,
  },
  '[data-id="c_2"]': {
    top: -336,
    left: 529,
  },
  '[data-id="c_3"]': {
    top: -156,
    left: 608,
  },
  '[data-id="c_4"]': {
    top: -128,
    left: 241,
  },
}));
