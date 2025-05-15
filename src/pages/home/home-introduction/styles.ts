import { styled } from "@mui/material/styles";

export const StyledWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",

  ">div:last-of-type": {
    background: "#4a4dff",
    flex: 2,
  },
}));

export const StyledContent = styled("div")(({ theme }) => ({
  flex: 3,
  padding: "120px 100px 100px 100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));
