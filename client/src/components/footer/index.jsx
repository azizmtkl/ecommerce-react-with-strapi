import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        paddingBlock: 2,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#2B3445",
        color: "#ffff",
      }}
    >
      <Typography variant="body2">
        © 2015 - 2024 LuisZed® Global Inc.
      </Typography>
    </Box>
  );
};

export default Footer;
