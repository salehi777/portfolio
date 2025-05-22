import { TAN } from "@/constants";
import { styled } from "@mui/material/styles";

export const StyledContent = styled("div")(({ theme }) => ({
  padding: "140px 80px 100px 80px",
  position: "relative",
}));

export const StyledSkill = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",

  svg: {
    width: 120,
    height: 120,

    path: {
      // strokeDasharray: "30 100",
      stroke: theme.palette.primary.main,
      strokeLinecap: "round",
      strokeWidth: 1,
    },
  },

  div: {
    position: "absolute",
    width: "80%",
    height: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "10%",
    left: "10%",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    textAlign: "center",
    margin: "0 auto",
    fontSize: 20,
    lineHeight: 1,
  },

  span: {
    position: "absolute",
    fontSize: 10,
    color: theme.palette.primary.main,
    // backgroundColor: "white",
    // boxShadow: "#b5b5b5 0px 3px 8px",
    // borderRadius: "100%",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    height: 15,
    // width: 15,
    right: "50%",
    top: 0,
    transformOrigin: `center ${120 / 2 + 15 / 2}px`,
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
    top: -259,
    left: 147,
  },
  '[data-id="c_2"]': {
    top: -259,
    left: 372,
  },
  '[data-id="c_3"]': {
    top: -107,
    left: 486,
  },
  '[data-id="c_4"]': {
    top: -98,
    left: 113,
  },
}));
