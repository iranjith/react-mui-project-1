import Grid from "@mui/material/Grid";
import CommonButton from "../components/CommonButton";

const Authentication = () => {
  const buttonStyles = {
    fontSize: "0.875rem",
    fontWeight: 600,
    textTransform: "capitalize",
    borderRadius: 2.5,
    "&.MuiButton-contained": {
      backgroundColor: "#009be5",
      "&:hover": {
        backgroundColor: "#006db3",
      },
    },
    "&.MuiButton-outlined": {
      color: "#fff",
      borderColor: "#fff",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  };

  return (
    <>
      <Grid item xs={8}>
        <CommonButton
          sx={buttonStyles}
          color={"primary"}
          variant={"contained"}
          disabled={false}
          size={"small"}
        >
          Add User
        </CommonButton>

        <CommonButton
          sx={buttonStyles}
          color={"primary"}
          variant={"text"}
          disabled={false}
          size={"small"}
        >
          Add User
        </CommonButton>
      </Grid>
    </>
  );
};

export default Authentication;
