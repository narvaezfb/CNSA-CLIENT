import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useSelector } from "react-redux";

// material-ui
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";

// project imports
import AnimateButton from "ui-component/extended/AnimateButton";

// style constant
const useStyles = makeStyles((theme) => ({
  signDivider: {
    flexGrow: 1,
    borderColor: `${theme.palette.grey[700]} !important`,
  },
  signText: {
    cursor: "unset",
    margin: theme.spacing(2),
    padding: "5px 56px",
    borderColor: `${theme.palette.grey[700]} !important`,
    color: `${theme.palette.grey[900]}!important`,
    fontWeight: 500,
  },
  loginIcon: {
    marginRight: "16px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "8px",
    },
  },
  Input: {
    ...theme.typography.customInput,
  },
  autoWidth: "true",
}));

//= ===========================|| PLAYER - FORM ||============================//

const TeamForm = () => {
  const classes = useStyles();
  // const customization = useSelector((state) => state.customization);

  //Player data that will be stored
  const [teamName, setTeamName] = useState();
  const [school, setSchool] = useState();
  const [existingSchools, setExistingSchools] = useState();

  //Load data from APIs
  useEffect(() => {
    getSchools();
  }, []);

  //Get Existing Schools from Schools API
  const getSchools = () => {
    return axios
      .get("https://cnsa-server.nn.r.appspot.com/cnsa/v1/schools")
      .then((response) => {
        setExistingSchools(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  //This function will send the data to the Create Team API
  const submitTeam = async () => {
    //gather all data that will be sent
    const data = {
      team_name: teamName,
      school_id: school,
    };

    //Using axios for the POST Request
    const result = await axios({
      method: "POST",
      headers: { "content-type": "application/json" },
      url: "https://cnsa-server.nn.r.appspot.com/cnsa/v1/teams",
      data: data,
    });

    if (result.data.status === "success") {
      console.log(result.data);
    } else {
      console.log("something went wrong");
    }
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              mb: 2,
            }}
          >
            <Typography variant="h3">Player Form - CNSA</Typography>
          </Box>
        </Grid>
      </Grid>

      <form onSubmit={submitTeam}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.Input}>
              <InputLabel htmlFor="team-name">Team Name</InputLabel>
              <OutlinedInput
                id="team-name"
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                name="teamName"
                label="Team Name"
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Box autoWidth="true" sx={{ minWidth: 250 }}>
              <InputLabel id="demo-simple-select-label">
                Select School
              </InputLabel>
              <FormControl fullWidth className={classes.Input}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={school}
                  label="school"
                  onChange={(e) => setSchool(e.target.value)}
                >
                  {existingSchools?.map((school, index) => (
                    <MenuItem key={index} value={school.school_id}>
                      {school.school_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                mt: 2,
              }}
            >
              <AnimateButton>
                <Button
                  disableElevation
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  Enter
                </Button>
              </AnimateButton>
            </Box>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default TeamForm;
