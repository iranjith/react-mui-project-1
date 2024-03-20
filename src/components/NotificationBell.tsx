import { NotificationImportant } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import { useRef, useState } from "react";
import BasicMenu from "./BasicMenu";

interface Props {
  iconColor:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "inherit"
    | "default"
    | undefined;
  badgeContent: number;
  onClick?: () => void;
  anchorElem?: null | HTMLElement;
  menuItems?: [{ id: number; label: string }];
}

const notifications = [
  {
    id: 0,
    label: "First notification",
  },
  {
    id: 1,
    label: "Second notification",
  },
];

const NotificationBell = ({ iconColor, badgeContent }: Props) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const newNotifications = `You have ${badgeContent} new notification!`;
  const noNotifications = "No new notifications";


  const ref = useRef(null);

  const handleOpen = (e:any) => {
    setAnchorEl(e.current);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title={badgeContent ? newNotifications : noNotifications}>
        <IconButton
          color={iconColor}
          ref={ref}
          onClick={() => (notifications.length > 0 ? handleOpen(ref) : () => {})}
        >
          <Badge badgeContent={badgeContent} color="secondary">
            <NotificationImportant />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        menuItems={notifications}
      ></BasicMenu>
    </>
  );
};

export default NotificationBell;
