/* eslint-disable react/prop-types */
import { Box, Stack, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Banner = ({ ImgBanner, title, sousTitle, textButton }) => {
  return (
    <Box position="relative">
      <img src={ImgBanner} alt="" width="100%" />
      <Stack
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Typography variant="h5" ml={3} color="#fff">
          {title}
        </Typography>
        <Typography ml={3} my={1} color="#fff">
          {sousTitle}
        </Typography>
        <Button>
          {textButton}
          <ArrowForwardIcon sx={{ marginLeft: 2 }} />
        </Button>
      </Stack>
    </Box>
  );
};

export default Banner;
