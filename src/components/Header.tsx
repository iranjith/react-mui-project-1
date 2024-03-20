import { Avatar } from "@mui/material";
import NotificationBell from "./NotificationBell";
import CommonButton from "./CommonButton";

const Header = () => {
  return (
    <>
        <CommonButton color={"primary"} variant={"contained"} disabled={false} size={"small"}>
            Sign Up
        </CommonButton>
      <NotificationBell
        iconColor={"primary"}
        badgeContent={4}
      ></NotificationBell>
      <Avatar>R</Avatar>
    </>
  );
};

export default Header;
