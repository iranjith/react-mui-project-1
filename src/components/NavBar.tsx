import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import { navbarStyles } from "../styles/navBarStyles";
import { mainNavItems } from "./mainNavItems";
import { useNavigate } from "react-router";

const NavBar = () => {

    const navigate= useNavigate();

  return (
    <>
      <Drawer sx={navbarStyles.drawer} variant="permanent" anchor="left">
        <Toolbar />
        <Divider />
        <List>
          {mainNavItems.map((item) => (
            <ListItem key={item.id} disablePadding onClick={()=> navigate(item.route)}>
              <ListItemButton>
                <ListItemIcon sx={navbarStyles.icons}>{item.icon}</ListItemIcon>
                <ListItemText sx={navbarStyles.text} primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default NavBar;
