import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Typography, Stack, Box, useTheme, Card } from "@mui/material/";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Rating from "@mui/material/Rating";
import ProductDetail from "./ProductDetail";
import { useState } from "react";
import { useGetproductByNameQuery } from "../redux/product";
import Loader from "./Loader";
import { truncateText } from "../utils/truncateText";

const ProductCard = () => {
  const theme = useTheme();
  const [showDialog, setShowDialog] = useState(false);
  const [productSelected, setProductSelected] = useState();

  const {
    data: products,
    error,
    isLoading,
  } = useGetproductByNameQuery("/products?populate=*");

  const OpenDialog = ({ selected }) => {
    setShowDialog(true);
    setProductSelected(selected);
  };

  if (error || isLoading) {
    return (
      <>
        <Box
          minHeight={250}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            backgroundColor: theme.palette.bgFeatures.main,
          }}
        >
          <Loader />
          <Typography>
            {isLoading
              ? "Wainting"
              : "Error fetching data: Network response was not ok"}
          </Typography>
        </Box>
      </>
    );
  }

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      flexWrap="wrap"
      columnGap={1}
      rowGap={3}
      pb={5}
    >
      {products?.data.map((item) => {
        return (
          <Card key={item} sx={{ maxWidth: "330px" }}>
            <CardMedia
              sx={{
                height: 220,
                "&:hover": {
                  scale: "1.1",
                  transition: "900ms",
                  rotate: "1deg",
                },
              }}
              image={`${item.attributes.images.data[0].attributes.url}`}
              title="Kitchen "
            />
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignContent="center"
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  fontSize="1.1rem"
                  component="div"
                >
                  {item.attributes.title}
                </Typography>

                <Typography fontSize="1.1rem" fontWeight="bold" color="red">
                  ${item.attributes.price}
                </Typography>
              </Stack>

              <Typography
                variant="body2"
                fontSize="0.9rem"
                color="text.secondary"
              >
                {truncateText(item.attributes.description)}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between" }}>
              <Button
                size="small"
                onClick={() => OpenDialog({ selected: item })}
              >
                <AddShoppingCartIcon />
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "0.9rem",
                    paddingLeft: 1,
                  }}
                >
                  Add to cart
                </Typography>
              </Button>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
              />
            </CardActions>
          </Card>
        );
      })}

      <ProductDetail
        open={showDialog}
        setOpen={() => setShowDialog(!showDialog)}
        product={productSelected}
      />
    </Stack>
  );
};

export default ProductCard;
