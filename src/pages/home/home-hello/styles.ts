import { styled } from "@mui/material/styles";

export const StyledContent = styled("div")(({ theme }) => ({
  width: "calc(100vw - 600px)",
  height: "100%",
  padding: "120px 140px 100px 100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",

  ">div:last-of-type": {
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

const tan = Math.tan(((180 - 113.7) * Math.PI) / 180);

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
      height: 750 / tan,
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

    '[data-id="1"]': {
      top: -309,
      left: 375,
    },
    '[data-id="2"]': {
      top: -395,
      left: 218,
    },
    '[data-id="3"]': {
      top: -395,
      left: 533,
    },
    '[data-id="4"]': {
      top: -385,
      left: 444,
    },
    '[data-id="5"]': {
      top: -601,
      left: 389,
    },
    '[data-id="6"]': {
      top: -575,
      left: 450,
    },
    '[data-id="7"]': {
      top: -575,
      left: 328,
    },
    '[data-id="8"]': {
      top: -677,
      left: 389,
    },
    '[data-id="9"]': {
      top: -178,
      left: 621,
    },
    '[data-id="10"]': {
      top: -252,
      left: 742,
    },
    '[data-id="11"]': {
      top: -517,
      left: 681,
    },
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
