// @ts-nocheck
import { useState } from "react";
import {
  useTheme,
  Box,
  Typography,
  IconButton,
  Container,
} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import {
  Facebook,
  Instagram,
  Twitter,
  DarkMode,
  LightMode,
  Add,
} from "@mui/icons-material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useMediaQuery from "@mui/material/useMediaQuery";

const options = ["FR", "EN"];

const TopHeader = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery("(max-width : 600px)");
  const [showTopHeader, setShowTopHeader] = useState(isMobile ? false : true);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      bgcolor="#2B3445"
      sx={{
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px",
      }}
    >
      <Container
        alignitems="center"
        sx={{
          display: `${isMobile ? "column" : "flex"}`,
          paddingBlock: `${isMobile ? "5px" : undefined}`,

          "& .MuiSvgIcon-root": {
            color: "#fff",
            fontSize: "18px",
          },
          "& .MuiListItemText-secondary": {
            color: "#fff",
            fontSize: "13px",
            padding: "0px !important",
          },
          "& .MuiList-root": {
            padding: "0px",
          },
        }}
        color="#fff"
      >
        <Box display="flex" alignItems="center">
          <Typography
            bgcolor="#e74c3c"
            mr={1}
            px={2}
            py="4px"
            borderRadius={4}
            fontSize="13px"
            color="#fff"
          >
            HOT
          </Typography>

          <Typography fontSize="13px" color="#fff">
            Free Express Shipping{" "}
          </Typography>

          {isMobile && (
            <IconButton
              sx={{ ml: "auto" }}
              onClick={() => setShowTopHeader(!showTopHeader)}
            >
              <Add />
            </IconButton>
          )}
        </Box>

        {/* Icons in Top Bar */}
        <Box
          display={showTopHeader ? "flex" : "none"}
          sx={{ transitionDuration: "5s" }}
          alignitems="center"
          ml="auto"
        >
          <IconButton
            sx={{ ml: "auto" }}
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              localStorage.setItem("name", "noha");
              colorMode.toggleColorMode();
            }}
          >
            {theme.palette.mode === "light" ? <DarkMode /> : <LightMode />}
          </IconButton>

          <div>
            <List component="nav" aria-label="Device settings">
              <ListItemButton
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <ListItemText secondary={options[selectedIndex]} />
                <KeyboardArrowDownIcon />
              </ListItemButton>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <IconButton>
            <Facebook />
          </IconButton>
          <IconButton>
            <Instagram />
          </IconButton>
          <IconButton>
            <Twitter />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default TopHeader;
