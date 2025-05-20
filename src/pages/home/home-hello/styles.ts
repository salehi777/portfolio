import { TAN } from "@/constants";
import { styled } from "@mui/material/styles";

export const StyledContent = styled("div")(({ theme }) => ({
  width: "calc(100vw - 600px)",
  height: "100%",
  padding: "120px 140px 100px 100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",

  "[data-scroll]": {
    marginTop: 140,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    ">div": {
      width: 55,
      height: 55,
      borderRadius: "100%",
      marginLeft: 14,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "#b5b5b5 0px 3px 8px",
    },
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

    ">div:first-of-type": {
      position: "absolute",
      height: "100%",
      width: 500,
      bottom: 0,
      left: 0,
      background: "#5b46cc",
    },
    ">div:last-of-type": {
      position: "absolute",
      height: 750 / TAN,
      width: 750,
      bottom: 0,
      left: 0,
      background: "#b1b8f9",
      clipPath: "polygon(0 0, 0% 100%, 100% 100%)",
      div: {
        position: "absolute",
        height: "50%",
        width: "33.33%",
        bottom: 0,
        right: 0,
        background: "#474bfe",
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
    left: 375,
  },
  '[data-id="c_2"]': {
    top: -395,
    left: 218,
  },
  '[data-id="c_3"]': {
    top: -395,
    left: 533,
  },
  '[data-id="c_4"]': {
    top: -385,
    left: 444,
  },
  '[data-id="c_5"]': {
    top: -591,
    left: 387,
  },
  '[data-id="c_6"]': {
    top: -566,
    left: 443,
  },
  '[data-id="c_7"]': {
    top: -566,
    left: 330,
  },
  '[data-id="c_8"]': {
    top: -613,
    left: 387,
  },
  '[data-id="c_9"]': {
    top: -178,
    left: 621,
  },
  '[data-id="c_10"]': {
    top: -255,
    left: 704,
  },
  '[data-id="c_11"]': {
    top: -520,
    left: 602,
  },
  '[data-id="s_1"]': {
    top: -375,
    left: 357,
  },
  '[data-id="s_2"]': {
    top: -371,
    left: 482,
  },
  '[data-id="s_3"]': {
    top: -210,
    left: 158,
  },

  [theme.breakpoints.up("xl")]: {
    "[data-shapes-1]": {
      transform: "scale(1.2)",
      transformOrigin: "left bottom",
    },
    "[data-shapes-2]": {
      transform: "scale(1.1)",
      transformOrigin: "left bottom",
      left: 50,
      bottom: 12,
    },
  },
}));
