import { RefreshOutlined } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import BasicCard from "../components/BasicCard";
import BasicModal from "../components/BasicModal";
import CommonButton from "../components/CommonButton";
import SearchBar from "../components/SearchBar";
import { cardHeaderStyles } from "../styles/cardStyles";
import { gridWrapperStyles } from "../styles/gridStyles";
import NewUserModal from "../components/NewUserModal";



const Authentication = () => {

  const [open, setOpen] = useState(false);

  //const ref=useRef<HTMLInputElement>(null);

  const handleModalClose =()=>{
    setOpen(false);
  }


  const getHeader = () => {
    const handleChange = (value: string) => {
      console.log(value);
    };

 
    const addUser = () => {
      setOpen(true);
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
        <NewUserModal modalOpen={open} onClose={handleModalClose} addNewUser={function (data: { userId: string; email: string; phoneNumber: string; }): void {
          } } />
      </Grid>
    </>
  );
};

export default Authentication;
