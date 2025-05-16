import { styled } from "@mui/material/styles";

export const StyledHeader = styled("header")(({ theme }) => ({
  position: "fixed",
  width: "100%",
  zIndex: theme.zIndex.appBar,
  height: 120,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  padding: "0 60px",

  ">a": {
    height: 60,
    display: "flex",
    alignItems: "center",

    ">div": {
      marginRight: 12,
      fontSize: 28,
    },
  },

  ">button": {
    width: 60,
    height: 60,
    color: "white",
    ".svg-color": { width: 30, height: 30 },
  },
}));

export const StyledDrawer = styled("div")(({ theme }) => ({
  background: "white",
  top: 0,
  bottom: 0,
  position: "fixed",
  left: 0,
  zIndex: theme.zIndex.drawer,
  transition: theme.transitions.create("width"),
}));
