import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "../components/Header";

const Layout = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    setTitle(location.pathname.replace("/", "").toUpperCase());
  }, [location.pathname]);

  return (
    <>
      <Grid container>
        <NavBar></NavBar>
        <Header title={title}></Header>
        <Outlet></Outlet>
      </Grid>
    </>
  );
};

export default Layout;
