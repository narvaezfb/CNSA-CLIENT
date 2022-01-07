import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

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
  Divider,
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

const PlayerForm = () => {
  const classes = useStyles();
  const customization = useSelector((state) => state.customization);

  //Player data that will be stored
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [rank, setRank] = useState();  
  const [team, setTeam] = useState(0);
  const [position, setPosition] = useState(0);
  const [existingPositions, setExistingPositions] = useState();
  const [existingTeams, setExistingTeams] = useState();

  //Load data from APIs
  useEffect(() => {
    getTeams();
    getPositions();
  }, []);

  //Get Existing teams from Teams API
  const getTeams = () => {
    return axios
      .get("/cnsa/v1/teams")
      .then((response) => {
        setExistingTeams(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  //Get Existing Positions from Teams API
  const getPositions = () => {
    return axios
      .get("/cnsa/v1/positions")
      .then((response) => {
        setExistingPositions(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  //This function will send the data to the Create Team API
  const submitPlayer = async () => {
    //gather all data that will be sent
    const data = {
      player_email_address: email,
      player_first_name: firstName,
      player_last_name: lastName,
      player_date_of_birth: dateOfBirth,
      position_id: position,   
      team_id: team,
      ranking: rank,
    };

    //Using axios for the POST Request
    const result = await axios({
      method: "POST",
      headers: { "content-type": "application/json" },
      url: "/cnsa/v1/players",
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

      <form onSubmit={submitPlayer}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <FormControl fullWidth className={classes.Input}>
              <InputLabel htmlFor="first-name">FirstName</InputLabel>
              <OutlinedInput
                id="first-name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                name="firstName"
                label="First Name"
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={6} md={6}>
            <FormControl fullWidth className={classes.Input}>
              <InputLabel htmlFor="first-name">LastName</InputLabel>
              <OutlinedInput
                id="last-name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                name="lastName"
                label="Last Name"
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={6} md={6}>
            <FormControl fullWidth className={classes.Input}>
              <InputLabel htmlFor="date-of-birth">Email Address</InputLabel>
              <OutlinedInput
                id="date-of-birth"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="DOB"
                label="Date of Birth"
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={6} md={6}>
            <FormControl fullWidth className={classes.Input}>
              <InputLabel htmlFor="date-of-birth">Date of Birth</InputLabel>
              <OutlinedInput
                id="date-of-birth"
                type="text"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                name="DOB"
                label="Date of Birth"
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
              }}
            >
              <Divider
                className={classes.signDivider}
                orientation="horizontal"
              />
              <AnimateButton>
                <Button
                  variant="outlined"
                  className={classes.signText}
                  sx={{
                    borderRadius: `${customization.borderRadius}px`,
                  }}
                  disableRipple
                  disabled
                >
                  Team Details
                </Button>
              </AnimateButton>
              <Divider
                className={classes.signDivider}
                orientation="horizontal"
              />
            </Box>
          </Grid>
          <Grid item xs={6} md={6}>
            <Box autoWidth="true" sx={{ minWidth: "50%" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Team
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={team}
                  label="team"
                  input={<OutlinedInput label="Select Team"/>}
                  onChange={(e) => setTeam(e.target.value)}
                >
                  {existingTeams?.map((team, index) => (
                    <MenuItem key={index} value={team.team_id}>
                      {team.team_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={6} md={6}>
            <Box sx={{ minWidth: "50%" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Position
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={position}
                  label="position"
                  input={<OutlinedInput label="Select Position"/>}
                  onChange={(e) => setPosition(e.target.value)}
                >
                  {existingPositions?.map((position, index) => (
                    <MenuItem key={index} value={position.position_id}>
                      {position.position_name}
                    </MenuItem>
                  ))}
                </Select> 
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.Input}>
              <InputLabel htmlFor="ranking">Rank</InputLabel>
              <OutlinedInput
                id="ranking"
                type="number"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
                name="Rank"
                label="Rank"
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </FormControl>
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

export default PlayerForm;
