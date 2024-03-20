import { Box, Grid, IconButton, Typography } from "@mui/material";
import BasicCard from "../components/BasicCard";
import SearchBar from "../components/SearchBar";
import { ChangeEvent, useRef } from "react";
import { gridWrapperStyles } from "../styles/gridStyles";
import { cardHeaderStyles } from "../styles/cardStyles";
import CommonButton from "../components/CommonButton";
import { RefreshOutlined } from "@mui/icons-material";

const Authentication = () => {

  const ref=useRef<HTMLInputElement>(null);

  const getHeader = () => {
    const handleChange = (value: string) => {
      console.log(value);
    };

    const addUser = () => {
      console.log("click");
    };
    return (
      <Box sx={cardHeaderStyles.wrapper}>
        <SearchBar
          placeholder="Search by email address, phone number, or user UID"
          onChange={(event) => handleChange(event.target.value)}
        />
        <Box>
          <CommonButton
            variant="contained"
            onClick={addUser}
            size="large"
            sx={cardHeaderStyles.addUserButton}
            color={"primary"}
            disabled={false}
          >
            Add user
          </CommonButton>
          <IconButton>
            <RefreshOutlined />
          </IconButton>
        </Box>
      </Box>
    );
  };

  const getContent = () => (
    <Typography
      align="center"
      sx={{
        margin: "40px 16px",
        color: "rgba(0, 0, 0, 0.6)",
        fontSize: "1.3rem",
      }}
    >
      No users for this project yet
    </Typography>
  );

  return (
    <>
      <Grid item xs={8} sx={gridWrapperStyles}>
        <BasicCard
          header= {getHeader()}
          content={getContent()}
        ></BasicCard>
      </Grid>
    </>
  );
};

export default Authentication;
