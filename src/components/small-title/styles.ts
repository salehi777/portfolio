import { styled } from "@mui/material/styles";

export const StyledSmallTitle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  ">span": {
    height: 2,
    width: 40,
    marginLeft: 14,
    display: "block",
    background: theme.palette.primary.main,
  },
}));
