import { styled } from "@mui/material/styles";

export const StyledWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",

  ">div:last-of-type": {
    flex: 2,
  },
}));

export const StyledContent = styled("div")(({ theme }) => ({
  flex: 3,
  padding: "160px 140px 100px 100px",
  
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

  "[data-desc]": {
    marginTop: 30,
    fontSize: 20,
  },
}));
