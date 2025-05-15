import { styled } from "@mui/material/styles";

export const StyledSlider = styled("div")(({ theme }) => ({
  height: "100vh",
}));

export const StyledDots = styled("div")(({ theme }) => ({
  position: "fixed",
  top: "50%",
  transform: "translateY(-50%)",
  right: 50,

  ">div": {
    display: "flex",
    alignItems: "center",
    padding: "10px 0",
    cursor: "pointer",

    ">span": {
      width: 16,
      height: 16,
      borderRadius: "100%",
      display: "block",
      background: theme.palette.grey[400],
      transition: theme.transitions.create("background"),
      marginLeft: 10,
    },

    ">div": {
      transition: theme.transitions.create("color"),
      color: theme.palette.grey[400],
    },

    "&[data-active=true]": {
      ">span": {
        background: theme.palette.primary.main,
      },
      ">div": {
        color: theme.palette.primary.main,
      },
    },
  },
}));
