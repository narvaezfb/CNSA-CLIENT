import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import TextField from "@mui/material/TextField";

// material-ui
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Divider,
  Select,
  MenuItem,
  Typography,
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

//= ===========================|| GAME - FORM ||============================//

const GameForm = () => {
  const classes = useStyles();
  const customization = useSelector((state) => state.customization);

  const [occuranceDate, setOcurranceDate] = useState();
  const [gameAttendance, setGameAttendance] = useState();
  const [stadium, setStadium] = useState();
  const [visitorTeam, setVisitorTeam] = useState();
  /* eslint-disable no-unused-vars */
  const [localTeam, setLocalTeam] = useState();
  const [visitorScore, setVisitorScore] = useState();
  const [homeScore, setHomeScore] = useState();
  const [gameType, setGameType] = useState();
  const [existingTeams, setExistingTeams] = useState();
  const [existingStadiums, setExistingStadiums] = useState();
  const [existingGameTypes, setExistingGameTypes] = useState();

  //Load data from APIs
  useEffect(() => {
    getExistingStadiums();
    getExistingTeams();
    getGameTypes();
  }, [setLocalTeam]);

  const getExistingStadiums = () => {
    return axios
      .get("/cnsa/v1/stadiums")
      .then((response) => {
        setExistingStadiums(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const getExistingTeams = () => {
    return axios
      .get("/cnsa/v1/teams")
      .then((response) => {
        setExistingTeams(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const getGameTypes = () => {
    return axios
      .get("/cnsa/v1/gameTypes")
      .then((response) => {
        setExistingGameTypes(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const submitGame = async () => {
    //gather all data that will be sent
    const data = {
      ocurrance_date: occuranceDate,
      game_attendance: gameAttendance,
      stadium_id: stadium,
      visitor_team_id: visitorTeam,
      visitor_team_score: visitorScore,
      home_team_score: homeScore,
      game_type_id: gameType,
    };

    //Using axios for the POST Request
    const result = await axios({
      method: "POST",
      headers: { "content-type": "application/json" },
      url: "/cnsa/v1/games",
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
            <Typography variant="h3">Game Form</Typography>
          </Box>
        </Grid>
      </Grid>

      <form onSubmit={submitGame}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id="datetime-local"
                label="Occurance Date"
                type="date"
                defaultValue="2021-01-01"
                value={occuranceDate}
                onChange={(e) => {
                  setOcurranceDate(e.target.value);
                }}
                sx={{ minWidth: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth className={classes.Input}>
              <InputLabel htmlFor="opponent-id">Game Attendance</InputLabel>
              <OutlinedInput
                id="opponent-id"
                type="text"
                value={gameAttendance}
                name="opponentId"
                label="Opponent Id"
                onChange={(e) => {
                  setGameAttendance(e.target.value);
                }}
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Box autoWidth="true" sx={{ minWidth: 260 }}>
              <InputLabel id="demo-simple-select-label">
                Select Game Type
              </InputLabel>
              <FormControl fullWidth className={classes.Input}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gameType}
                  label="Game Type"
                  onChange={(e) => {
                    setGameType(e.target.value);
                  }}
                >
                  {existingGameTypes?.map((gameType) => (
                    <MenuItem
                      key={gameType.game_type_id}
                      value={gameType.game_type_id}
                    >
                      {gameType.game_type}
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
                  Game Details
                </Button>
              </AnimateButton>
              <Divider
                className={classes.signDivider}
                orientation="horizontal"
              />
            </Box>
          </Grid>

          <Grid item xs={6} md={6}>
            <Box autoWidth="true" sx={{ minWidth: 260 }}>
              <InputLabel id="demo-simple-select-label">
                Select Home Team
              </InputLabel>
              <FormControl fullWidth className={classes.Input}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={stadium}
                  label="Age"
                  onChange={(e) => {
                    setStadium(e.target.value);
                  }}
                >
                  {existingStadiums?.map((stadium) => (
                    <MenuItem
                      key={stadium.stadium_id}
                      value={stadium.stadium_id}
                    >
                      {stadium.team_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={6} md={6}>
            <Box autoWidth="true" sx={{ minWidth: 260 }}>
              <InputLabel id="demo-simple-select-label">
                Select Visitor Team
              </InputLabel>
              <FormControl fullWidth className={classes.Input}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={visitorTeam}
                  label="Age"
                  onChange={(e) => {
                    setVisitorTeam(e.target.value);
                  }}
                >
                  {existingTeams?.map((team) => (
                    <MenuItem key={team.team_id} value={team.team_id}>
                      {team.team_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={6} md={6}>
            <FormControl fullWidth className={classes.Input}>
              <InputLabel htmlFor="result">Home Team Result</InputLabel>
              <OutlinedInput
                id="result"
                type="text"
                name="result"
                label="Result"
                onChange={(e) => {
                  setHomeScore(e.target.value);
                }}
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
              <InputLabel htmlFor="result">Visitor Team Result</InputLabel>
              <OutlinedInput
                id="result"
                type="text"
                name="result"
                label="Result"
                onChange={(e) => {
                  setVisitorScore(e.target.value);
                }}
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

export default GameForm;
