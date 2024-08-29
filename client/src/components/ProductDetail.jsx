import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import Image from "../assets/img/hero2.jpg";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { useGetProductByIDQuery } from "../redux/product";

const ProductDetail = ({ open, setOpen, product }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const productId = product?.id.toString();
  console.log(productId);

  const { data, error, isLoading } = useGetProductByIDQuery(productId);
  const arrayImages = data?.data.attributes.images.data;

  console.log(arrayImages);

  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogContent>
          <Stack
            direction={{ md: "row", xs: "column" }}
            gap={3}
            justifyContent="center"
            alignItems="center"
            position="relative"
          >
            <Box
              component="img"
              src={`${product?.attributes.images.data[0].attributes.url}`}
              width={{ md: 250, xs: "100%" }}
              height={{ md: 350, xs: 200 }}
              sx={{ objectFit: "cover", borderRadius: 1 }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box>
                <IconButton
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                  }}
                >
                  <HighlightOffOutlinedIcon />
                </IconButton>
                <Typography variant="h5">
                  {product?.attributes.title}
                </Typography>
                <Typography
                  variant="h6"
                  py={1}
                  fontWeight="bold"
                  color="#c0392b"
                >
                  ${product?.attributes.price}
                </Typography>
                <Typography variant="body2">
                  {product?.attributes.description}
                </Typography>
              </Box>
              <Stack
                order={{ md: 0, xs: -1 }}
                direction="row"
                flexWrap="wrap"
                gap={1}
                py={2}
              >
                {arrayImages?.map((img) => {
                  return (
                    <Box
                      key={img}
                      component="img"
                      src={img?.attributes.url}
                      width={80}
                      height={100}
                      sx={{ objectFit: "cover", borderRadius: 1 }}
                    />
                  );
                })}
              </Stack>
              <Button
                startIcon={<AddShoppingCartOutlinedIcon />}
                variant="contained"
                sx={{ maxWidth: "150px" }}
              >
                Buy Now
              </Button>
            </Box>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductDetail;
