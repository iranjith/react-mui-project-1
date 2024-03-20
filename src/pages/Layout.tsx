import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Grid } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Grid container>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </Grid>
    </>
  );
};

export default Layout;
