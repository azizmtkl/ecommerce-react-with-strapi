// @ts-nocheck
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import { Box, useTheme } from "@mui/material";
import Footer from "../components/footer";

const MainLayout = () => {
  const theme = useTheme();
  return (
    <>
      <Header />
      <Box bgcolor={theme.palette.bg.main}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default MainLayout;
