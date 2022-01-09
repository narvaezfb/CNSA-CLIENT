import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

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

const PlayerStatisticsForm = () => {
  const classes = useStyles();
  const customization = useSelector((state) => state.customization);

  //Player data that will be stored
  const [goalKick, setGoalKick] = useState();
  const [cornerKick, setCornerKick] = useState();
  const [penaltyKick, setPenaltyKick] = useState();
  const [passes, setPasses] = useState();
  const [freeKick, setFreeKick] = useState();
  const [turnovers, setTurnovers] = useState();
  const [touches, setTouches] = useState();
  const [redCard, setRedCard] = useState();
  const [yellowCard, setYellowCard] = useState();
  const [fouls, setFouls] = useState();
  const [player, setPlayer] = useState(0);
  const [game, setGame] = useState(0);
  const [existingPlayers, setExistingPlayers] = useState();
  const [existingGames, setExistingGames] = useState();

  //Load data from APIs
  useEffect(() => {
    getGames();
    getPlayers();
  }, []);

  //Get Existing teams from Teams API
  const getGames = () => {
    return axios
      .get("https://cnsa-server.nn.r.appspot.com/cnsa/v1/games")
      .then((response) => {
        setExistingGames(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  //Get Existing Positions from Teams API
  const getPlayers = () => {
    return axios
      .get("https://cnsa-server.nn.r.appspot.com/cnsa/v1/players")
      .then((response) => {
        setExistingPlayers(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  //This function will send the data to the Create Team API
  const submitPlayerStatistics = async () => {
    //gather all data that will be sent
    const data = {
      player_goal_kick: goalKick,
      player_corner_kick: cornerKick,
      player_penalty_kick: penaltyKick,
      player_passes: passes,
      player_free_kicks: freeKick,
      player_turnovers: turnovers,
      player_touches: touches,
      player_red_cards: redCard,
      player_yellow_cards: yellowCard,
      player_fouls: fouls,
      game_id: game,
      player_id: player,
    };

    //Using axios for the POST Request
    const result = await axios({
      method: "POST",
      headers: { "content-type": "application/json" },
      url: "/cnsa/v1/playerStatistics",
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
      <Grid container justify="center">
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
            <Typography variant="h3">Player Statistic Entry Form</Typography>
          </Box>
        </Grid>
      </Grid>

      <form onSubmit={submitPlayerStatistics}>
        <Grid container spacing={2}>
          <Grid item xs={3} md={3}>
            <FormControl fullWidth className={classes.Input}>
              <InputLabel htmlFor="first-name">Goal Kicks</InputLabel>
              <OutlinedInput
                id="last-name"
                type="text"
                value={goalKick}
                onChange={(e) => setGoalKick(e.target.value)}
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
          <Grid item xs={3} md={3}>
            <FormControl fullWidth className={classes.Input}>
              <InputLabel htmlFor="first-name">Corner Kicks</InputLabel>
              <OutlinedInput
                id="last-name"
                type="text"
                value={cornerKick}
                onChange={(e) => setCornerKick(e.target.value)}
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
          <Grid item xs={3} md={3}>
            <FormControl fullWidth className={classes.Input}>
              <InputLabel htmlFor="first-name">Penalty Kicks</InputLabel>
              <OutlinedInput
                id="last-name"
                type="text"
                value={penaltyKick}
                onChange={(e) => setPenaltyKick(e.target.value)}
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
          <Grid item xs={3} md={3}>
            <FormControl fullWidth className={classes.Input}>
              <InputLabel htmlFor="first-name">Passes</InputLabel>
              <OutlinedInput
                id="last-name"
                type="text"
                value={passes}
                onChange={(e) => setPasses(e.target.value)}
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

          <Grid item xs={3} md={3}>
            <FormControl fullWidth className={classes.Input}>
              <InputLabel htmlFor="first-name">Free Kicks</InputLabel>
              <OutlinedInput
                id="last-name"
                type="text"
                value={freeKick}
                onChange={(e) => setFreeKick(e.target.value)}
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

          <Grid item xs={3} md={3}>
            <FormControl fullWidth className={classes.Input}>
              <InputLabel htmlFor="first-name">Turnovers</InputLabel>
              <OutlinedInput
                id="last-name"
                type="text"
                value={turnovers}
                onChange={(e) => setTurnovers(e.target.value)}
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
          <Grid item xs={3} md={3}>
            <FormControl fullWidth className={classes.Input}>
              <InputLabel htmlFor="first-name">Touches</InputLabel>
              <OutlinedInput
                id="last-name"
                type="text"
                value={touches}
                onChange={(e) => setTouches(e.target.value)}
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

          <Grid item xs={3} md={3}>
            <FormControl fullWidth className={classes.Input}>
              <InputLabel htmlFor="first-name">Fouls</InputLabel>
              <OutlinedInput
                id="last-name"
                type="text"
                value={fouls}
                onChange={(e) => setFouls(e.target.value)}
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
              <InputLabel htmlFor="first-name">Red Cards</InputLabel>
              <OutlinedInput
                id="last-name"
                type="text"
                value={redCard}
                onChange={(e) => setRedCard(e.target.value)}
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
              <InputLabel htmlFor="first-name">Yellow cards</InputLabel>
              <OutlinedInput
                id="last-name"
                type="text"
                value={yellowCard}
                onChange={(e) => setYellowCard(e.target.value)}
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
                  Player Details
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
                  Select Player
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={player}
                  label="player"
                  input={<OutlinedInput label="Select Player" />}
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
          <Grid item xs={6} md={6}>
            <Box autoWidth="true" sx={{ minWidth: "50%" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Game
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={game}
                  label="game"
                  input={<OutlinedInput label="Select the Game Played " />}
                  onChange={(e) => setGame(e.target.value)}
                >
                  {existingGames?.map((game, index) => (
                    <MenuItem key={index} value={game.game_id}>
                      {game.game_id}
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

export default PlayerStatisticsForm;
