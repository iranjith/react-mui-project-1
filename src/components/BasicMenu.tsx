import { Menu, MenuItem } from "@mui/material";

interface Props {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
  menuItems: any[];
}

const BasicMenu = ({ anchorEl, open, handleClose, menuItems }: Props) => {
  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItems.map((item) => (
          <MenuItem key={item.id} onClick={handleClose}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default BasicMenu;
