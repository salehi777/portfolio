import { styled } from "@mui/material/styles";

export const StyledSlider = styled("div")(({ theme }) => ({
  height: "100vh",
}));

export const StyledDots = styled("div")(({ theme }) => ({
  position: "fixed",
  bottom: 5,
  right: 5,

  ">div": {
    position: "absolute",
    top: -100,
    transformOrigin: "0 100px",
    cursor: "pointer",
    padding: "10px 5px",

    "&:nth-of-type(1)": {
      transform: "rotate(-0deg)",
    },
    "&:nth-of-type(2)": {
      transform: "rotate(-18deg)",
    },
    "&:nth-of-type(3)": {
      transform: "rotate(-36deg)",
    },
    "&:nth-of-type(4)": {
      transform: "rotate(-54deg)",
    },
    "&:nth-of-type(5)": {
      transform: "rotate(-72deg)",
    },
    "&:nth-of-type(6)": {
      transform: "rotate(-90deg)",
    },

    span: {
      width: 16,
      height: 16,
      borderRadius: "100%",
      display: "block",
      background: theme.palette.grey[400],
      transition: theme.transitions.create("background"),
    },

    div: {
      position: "absolute",
      transition: theme.transitions.create("color"),
      color: theme.palette.grey[400],
      whiteSpace: "nowrap",
      transform: "rotate(90deg)",
      transformOrigin: "100% 0%",
      top: 0,
      right: "calc(50% - 12px)",
    },

    "&[data-active=true]": {
      span: {
        background: theme.palette.primary.main,
      },
      div: {
        color: theme.palette.primary.main,
      },
    },
  },
}));
