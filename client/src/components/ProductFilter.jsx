import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ProductCard from "./ProductCard";

const ProductFilter = () => {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        py={5}
        gap={3}
      >
        <Box>
          <Typography variant="h5">Selected Products</Typography>
          <Typography variant="body2">
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>

        <Stack
          sx={{
            "& .Mui-selected": {
              color: "red",
              bgcolor: "#fadddd",
            },
            "& .MuiTypography-root": {
              fontWeight: 500,
              textTransform: "capitalize",
            },
          }}
        >
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="left aligned">
              <Typography>Living room</Typography>
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              <Typography>Bedroom</Typography>
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              <Typography>Sofas</Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>

      {/* Products Filtred  */}

      <ProductCard />
    </>
  );
};

export default ProductFilter;
