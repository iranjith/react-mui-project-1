import { Avatar, Tooltip, Typography, IconButton, Box } from "@mui/material";
import NotificationBell from "./NotificationBell";
import CommonButton from "./CommonButton";
import { HelpOutline } from "@mui/icons-material";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  const headerStyles = {
    wrapper: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#009be5",
      padding: "20px",
    },
    topRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "end",
      alignItems: "center",
      marginBottom: "20px",
      "*": {
        marginRight: "5px",
      },
    },
    middleRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "20px",
      marginLeft: '320px',
        },
    link: {
      fontWeight: 500,
      color: "rgba(255, 255, 255, 0.7)",
      "&:hover": {
        color: "#fff",
        cursor: "pointer",
      },
    },
    webButton: {
      marginRight: "5px",
    },
  };

  return (
    <>
      <Box sx={headerStyles.wrapper}>
        <Box sx={headerStyles.topRow}>
          <Typography sx={headerStyles.link}>Go to docs</Typography>
          <NotificationBell iconColor={"default"} badgeContent={0} />
          <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
        </Box>
        <Box sx={headerStyles.middleRow}>
          <Typography
            variant="h1"
            color="white"
          >
            {title}
          </Typography>
          <Box>
            <CommonButton
              sx={headerStyles.webButton}
              variant={"contained"}
              color={"primary"}
              disabled={false}
              size={"small"}
            >
              Web setup
            </CommonButton>
            <Tooltip title="Help">
              <IconButton>
                <HelpOutline />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
