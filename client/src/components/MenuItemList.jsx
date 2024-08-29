import { Stack, MenuItem, IconButton, Typography } from "@mui/material";

const MenuItemList = ({ icon, title }) => {
  return (
    <MenuItem>
      <Stack direction={"row"} alignItems="center" minWidth="240px">
        <IconButton sx={{ marginInline: 1 }}>{icon}</IconButton>
        <Typography variant="body2">{title}</Typography>
      </Stack>
    </MenuItem>
  );
};

export default MenuItemList;
