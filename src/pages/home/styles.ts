import { styled } from "@mui/material/styles";

export const StyledSlider = styled("div")(({ theme }) => ({
  height: "100vh",
}));

export const StyledDots = styled("div")(({ theme }) => ({
  position: "fixed",
  top: "50%",
  transform: "translateY(-50%)",
  right: 50,

  ">span": {
    width: 16,
    height: 16,
    borderRadius: "100%",
    display: "flex",
    marginBottom: 12,
    background: theme.palette.grey[500],
    transition: theme.transitions.create("background"),

    "&[data-active=true]": {
      background: theme.palette.primary.main,
    },
  },
}));
