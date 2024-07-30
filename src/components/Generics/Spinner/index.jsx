/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { Container } from "./style";
import { createPortal } from "react-dom";
import CircularProgress from "@mui/material/CircularProgress";

export const Spinner = () => {
  return createPortal(
    <Container>
      <Box>
        <CircularProgress color="success" />
      </Box>
    </Container>,
    document.getElementById("modal")
  );
};

export default Spinner;
