import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledSvgColor = styled(Box)(({ theme }) => ({
  width: 24,
  height: 24,
  flexShrink: 0,
  display: "inline-flex",
  backgroundColor: "currentColor",
}));
