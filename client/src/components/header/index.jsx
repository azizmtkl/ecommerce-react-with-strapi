import { useMediaQuery } from "@mui/material";
import MainHeader from "./MainHeader";
import NavHeader from "./NavHeader";
import TopHeader from "./TopHeader";

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <TopHeader />
      <MainHeader />
      {!isMobile && <NavHeader />}
    </>
  );
};

export default Header;
