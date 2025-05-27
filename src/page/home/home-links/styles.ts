import { styled } from "@mui/material/styles";

export const StyledContent = styled("div")(({ theme }) => ({
  padding: "120px 120px 100px 120px",

  [theme.breakpoints.down("lg")]: {
    padding: "120px 90px 100px 90px",
  },
}));

export const StyledProject = styled("a")(({ theme }) => ({
  boxShadow: "#b5b5b5 0px 3px 8px",
  borderRadius: 16,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",

  ">span": {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    minHeight: 300,
    width: "100%",
    display: "block",
  },

  ">div": {
    padding: "24px 16px 8px",
    background: "#e9e9e9",
    flex: 1,
  },

  [theme.breakpoints.down("lg")]: {
    ">span": {
      minHeight: 200,
    },
  },
}));
