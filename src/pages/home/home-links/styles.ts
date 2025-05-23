import { styled } from "@mui/material/styles";

export const StyledContent = styled("div")(({ theme }) => ({
  padding: "160px 140px 100px 100px",
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
    // ">div": {
    //   display: "flex",
    //   alignItems: "center",
    //   color: theme.palette.grey[600],
    //   ".svg-color": { marginLeft: 8, width: 20, height: 20 },
    // },
  },
}));
