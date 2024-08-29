import {
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme,
  Button,
  Menu,
  Container,
} from "@mui/material";
import { useState } from "react";
import {
  DashboardCustomize,
  KeyboardArrowRight,
  KeyboardArrowDown,
  MenuRounded,
} from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuList from "../MenuList";
import { navItems } from "../../constants/navItems";

const NavHeader = () => {
  const isMedium = useMediaQuery("(max-width: 900px)");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();

  return (
    <Box boxShadow={1}>
      <Container maxWidth={"xl"}>
        <Stack direction={"row"} py={2} alignItems="center">
          {/* Menu Categories */}
          <Box
            sx={{
              backgroundColor: theme.palette.grey[100],
            }}
            width="300px"
          >
            <Button
              id="menu-button"
              aria-controls={open ? "menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ color: theme.palette.grey[800], width: "100%" }}
            >
              <DashboardCustomize sx={{ marginInline: "8px" }} />
              <Typography>Categories</Typography>
              <Box flexGrow="1" />

              {open ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
            </Button>
            <Menu
              id="menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "menu-button",
              }}
            >
              <MenuList />
            </Menu>
          </Box>

          {/* Menu Nav  */}
          <Box ml="auto">
            {isMedium ? (
              <IconButton>
                <MenuRounded />
              </IconButton>
            ) : (
              navItems.map((item, key) => {
                return (
                  <Button
                    key={key}
                    sx={{ marginLeft: "1rem", color: theme.palette.grey[800] }}
                  >
                    {item}
                  </Button>
                );
              })
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default NavHeader;
