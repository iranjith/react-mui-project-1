import { NotificationImportant } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";

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
}

const NotificationBell = ({ iconColor, badgeContent }: Props) => {
  const newNotifications = `You have ${badgeContent} new notification!`;
  const noNotifications = "No new notifications";

  return (
    <>
      <Tooltip title={badgeContent ? newNotifications : noNotifications}>
        <IconButton color={iconColor}>
          <Badge badgeContent={badgeContent} color="secondary">
            <NotificationImportant />
          </Badge>
        </IconButton>
      </Tooltip>
    </>
  );
};

export default NotificationBell;
