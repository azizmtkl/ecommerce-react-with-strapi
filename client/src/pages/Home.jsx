// @ts-nocheck
import { Box, Container, useMediaQuery } from "@mui/material";
import Slider from "../components/Slider";
import furniture from "../assets/img/banner-2245.jpg";
import Banner from "../components/Banner";
import kitchen from "../assets/img/kitchen.jpg";
import Feautures from "../components/Feautures";
import ProductFilter from "../components/ProductFilter";
import { useGetproductByNameQuery } from "../redux/product";
import Loader from "../components/Loader";

const Home = () => {
  const isMdView = useMediaQuery("(max-width : 900px)");

  return (
    <>
      <Container sx={{ paddingBottom: 20 }}>
        <Box
          py={3}
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap={2}
          sx={{
            alignContent: "space-between",
            "& .MuiButton-root": {
              display: "flex",
              width: "fit-content",
              justifyContent: "start",
              marginLeft: 3,
              paddingInline: 2,
              color: "#fff",
              fontWeight: "bold",
              backgroundColor: "rgba(0,0,0,0.7)",
              "&:hover ": {
                transition: "300ms",
                paddingLeft: 4,
              },
            },
          }}
        >
          <Box gridColumn={isMdView ? "span 12" : "span 8"}>
            <Slider />
          </Box>
          <Box gridColumn="span 4" display={isMdView ? "none" : "block"}>
            <Banner
              ImgBanner={furniture}
              title="EXTRA 10% OFF !"
              sousTitle="In Our Store Only"
              textButton="Shop Now"
            />
            <Banner
              ImgBanner={kitchen}
              title="DESCOVER OUR TOPS !"
              sousTitle="In Our Store Only"
              textButton="Top Sales"
            />
          </Box>
        </Box>

        {/* Features */}

        <Feautures />
        <Box height={50} />

        <ProductFilter />
      </Container>
    </>
  );
};

export default Home;
