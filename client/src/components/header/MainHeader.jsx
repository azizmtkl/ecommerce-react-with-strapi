import { useState } from "react";
import {
  Box,
  Container,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
  Drawer,
  Modal,
  InputBase,
} from "@mui/material";
import {
  PersonOutlineOutlined,
  SearchOutlined,
  Menu,
} from "@mui/icons-material";
import DarkLogo from "/logo/DarkLogo.png";
import LightLogo from "/logo/LightLogo.png";
import MenuDrawer from "../MenuDrawer";

const MainHeader = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const theme = useTheme();

  const [menuDrawerState, setMenuDrawerState] = useState({ left: false });
  const [cartDrawerState, setCartDrawerState] = useState({ right: false });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDrawerMenu = (anchor, open) => (event) => {
    console.log(menuDrawerState);
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMenuDrawerState({ ...menuDrawerState, [anchor]: open });
  };

  return (
    <Box sx={{ boxShadow: { xs: 1, sm: 0 } }}>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          position="relative"
        >
          {isMobile && (
            <IconButton onClick={() => toggleDrawerMenu("left", true)}>
              <Menu />
            </IconButton>
          )}

          <Drawer
            anchor="left"
            open={menuDrawerState.left}
            onClose={toggleDrawerMenu("left", false)}
          >
            <MenuDrawer handleClose={toggleDrawerMenu("left", false)} />
          </Drawer>

          <Box>
            <img
              src={theme.palette.mode === "dark" ? LightLogo : DarkLogo}
              width="130px"
            />
          </Box>

          <Stack
            direction="row"
            alignItems="center"
            display={isMobile ? "none" : "flex"}
            sx={{
              backgroundColor: theme.palette.grey[100],
              margin: "1rem 5rem",
              padding: "8px 1rem",
              borderRadius: "5px",
              flex: "0 2 550px",
            }}
          >
            <SearchOutlined />
            <InputBase
              placeholder="Searching ..."
              sx={{
                flex: "1",
                marginInline: "8px",
                fontSize: "0.8rem",
              }}
            />
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            py="14px"
            sx={{
              [theme.breakpoints.down("sm")]: {
                "& .MuiButtonBase-root": {
                  padding: "3px",
                },
              },
            }}
          >
            {isMobile && (
              <IconButton onClick={() => setIsModalOpen(true)}>
                <SearchOutlined />
              </IconButton>
            )}

            <Modal
              open={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              closeAfterTransition
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "clamp(200px, 85%, 350px)",
                  backgroundColor: theme.palette.background.paper,
                  border: "1px solid #c7c0c0",
                  boxShadow: theme.shadows[1],
                  borderRadius: "4px",
                  padding: theme.spacing(1, 2),
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <InputBase placeholder="Search ..." />
                <IconButton>
                  <SearchOutlined />
                </IconButton>
              </Box>
            </Modal>

            {!isMobile && (
              <IconButton>
                <PersonOutlineOutlined />
              </IconButton>
            )}
            {/*<IconButton
              onClick={toggleDrawer(setCartDrawerState, "right", true)}
            >
              <LocalMallOutlined />
            </IconButton>

            <Drawer
              anchor="right"
              open={cartDrawerState.right}
              onClose={toggleDrawer(setCartDrawerState, "right", false)}
            >
              <CartDrawer
                handleClose={toggleDrawer(setCartDrawerState, "right", false)}
              />
            </Drawer>*/}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default MainHeader;
