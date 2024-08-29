import { Box, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

const FeatureItem = ({ title, subTitle, icon }) => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        display: "flex",
        alignContent: "center",
        flexGrow: 1,
        paddingBlock: 2,
        minWidth: "250px",
      }}
    >
      <Stack direction="row">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0.8rem",
          }}
        >
          {icon}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: "1.1rem" }}>{title}</Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              fontWeight: 300,
            }}
          >
            {subTitle}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default FeatureItem;
