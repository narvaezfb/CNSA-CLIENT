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

//= ===========================|| RECRUITMENT INCIDENT - FORM ||============================//

const RecruitmentIncidentForm = () => {
  const classes = useStyles();
  const customization = useSelector((state) => state.customization);
  //Player data that will be stored
  const [incidentDate, setIncidentDate] = useState();
  const [incidentComments, setIncidentComments] = useState();
  const [player, setPlayer] = useState(0);
  const [team, setTeam] = useState(0);
  const [rules, setRules] = useState(0);
  const [existingRules, setExistingRules] = useState();
  const [existingTeams, setExistingTeams] = useState();
  const [existingPlayers, setExistingPlayers] = useState();

  //Load data from APIs
  useEffect(() => {
    getPlayers();
    getTeams();
    getRules();
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
  const getPlayers = () => {
    return axios
      .get("/cnsa/v1/players")
      .then((response) => {
        setExistingPlayers(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  //Get Existing Positions from Teams API
  const getRules = () => {
    return axios
      .get("/cnsa/v1/recRules")
      .then((response) => {
        setExistingRules(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  //This function will send the data to the Create Team API
  const submitRecruitmentForm = async () => {
    //gather all data that will be sent
    const data = {
      incident_date: incidentDate,
      incident_comments: incidentComments,
      recruitment_rule_id: rules,
      team_id: team,
      player_id: player,
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
            <Typography variant="h3">Recruitment Incident Form</Typography>
          </Box>
        </Grid>
      </Grid>

      <form onSubmit={submitRecruitmentForm}>
        <Grid item xs={12}>
          <FormControl fullWidth className={classes.Input}>
            <InputLabel htmlFor="date-of-birth">Date of Birth</InputLabel>
            <OutlinedInput
              id="date-of-birth"
              type="text"
              value={incidentDate}
              onChange={(e) => setIncidentDate(e.target.value)}
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
          <FormControl fullWidth className={classes.Input}>
            <InputLabel htmlFor="description">Comments</InputLabel>
            <OutlinedInput
              id="description"
              type="text"
              value={incidentComments}
              onChange={(e) => setIncidentComments(e.target.value)}
              label="Description"
              inputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
            <Box autoWidth="true" sx={{ minWidth: "50%" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Recruitment infraction
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={rules}
                  label="team"
                  input={<OutlinedInput label="Select Recruitment Infraction"/>}
                  onChange={(e) => setRules(e.target.value)}
                >
                  {existingRules?.map((rule, index) => (
                    <MenuItem key={index} value={rule.recruitment_rule_id}>
                      {rule.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <Divider className={classes.signDivider} orientation="horizontal" />
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
                Parties Involved
              </Button>
            </AnimateButton>
            <Divider className={classes.signDivider} orientation="horizontal" />
          </Box>
        </Grid>
        <Grid  container spacing={2}>
        <Grid item xs={6} md={6}>
            <Box sx={{ minWidth: "50%" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Team
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={team}
                  label="position"
                  input={<OutlinedInput label="Select Team"/>}
                  onChange={(e) => setTeam(e.target.value)}
                >
                  {existingTeams?.map((team, index) => (
                    <MenuItem key={index} value={team.team_id}>
                      {team.team_name }
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
                  Select Player
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={player}
                  label="position"
                  input={<OutlinedInput label="Select Player"/>}
                  onChange={(e) => setPlayer(e.target.value)}
                >
                  {existingPlayers?.map((player, index) => (
                    <MenuItem key={index} value={player.player_id}>
                      {player.player_email_address}
                    </MenuItem>
                  ))}
                </Select> 
              </FormControl>
            </Box>
          </Grid>
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
      </form>
    </>
  );
};

export default RecruitmentIncidentForm;
