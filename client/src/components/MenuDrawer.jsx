import { Box, Container, IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const MenuDrawer = ({ handleClose }) => {
  return (
    <Box sx={{ width: "270px" }}>
      <Container>
        {/* Button Close*/}
        <Stack direction={"row"} justifyContent={"end"} py={3}>
          <IconButton onClick={handleClose()}>
            <CloseIcon />
          </IconButton>
        </Stack>

        {/* Button Menu*/}
        <Stack>
          <p>Aziz</p>
        </Stack>
      </Container>
    </Box>
  );
};

export default MenuDrawer;
