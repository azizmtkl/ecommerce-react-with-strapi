import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography } from "@mui/material";
import "../assets/styles/Slider.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import banner2 from "../assets/img/banner-8754.jpg";

const Slider = () => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <img src={banner2} alt="" />
        <Box
          p={4}
          sx={{
            position: "absolute",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: 2,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "70%", md: "450px" },
            "& .MuiTypography-root": {
              color: "#fff !important",
              paddingBlock: { xs: 0.5, sm: 1 },
            },
          }}
        >
          <Typography variant="h6">
            Mega Furniture Sale: Up to 50% Off!
          </Typography>
          <Typography variant="h5">
            SALE UP TO <span>30% OFF</span>
          </Typography>
          <Typography>Get Free Shipping on orders over $99.00</Typography>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
