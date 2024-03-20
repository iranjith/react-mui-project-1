import Grid from "@mui/material/Grid";
import NotificationBell from "../components/NotificationBell";

const Authentication = () => {
  return (
    <>
      <Grid item xs={8}>
        <NotificationBell iconColor={"primary"} badgeContent={4}></NotificationBell>
      </Grid>
    </>
  );
};

export default Authentication;
