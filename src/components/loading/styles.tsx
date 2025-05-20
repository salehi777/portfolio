import { styled } from "@mui/material/styles";

export const StyledLoading = styled("div")(({ theme, size }: any) => ({
  position: "relative",

  ">div": {
    position: "absolute",
    top: "16.66%",

    "&:last-of-type": {
      width: "66.66%",
      height: "66.66%",
      background: theme.palette.secondary.main,
      borderRadius: "100%",
      right: "33.33%",
      animation: "loading-circle 4s linear infinite",
    },

    "&:first-of-type": {
      width: "33.33%",
      height: "66.66%",
      background: theme.palette.primary.main,
      right: 0,
      animation: "loading-rect 4s linear infinite",
    },
  },

  "@keyframes loading-circle": {
    "0%": { right: "33.33%", zIndex: 1 },
    "4%": { right: "0%" },
    "50%": { right: "0%", zIndex: 2 },
    "54%": { right: "33.33%" },
    "100%": { right: "33.33%" },
  },

  "@keyframes loading-rect": {
    "0%": { right: "0%", zIndex: 2 },
    "4%": { right: "66.66%" },
    "50%": { right: "66.66%", zIndex: 1 },
    "54%": { right: "0%" },
    "100%": { right: "0%" },
  },
}));
