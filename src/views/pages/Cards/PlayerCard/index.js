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
  MenuItem
} from "@material-ui/core";

// mui
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

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

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

//= ===========================|| PLAYER - FORM ||============================//

const PlayerCard = () => {
  const classes = useStyles();
  const customization = useSelector((state) => state.customization);

  //Player data that will be stored
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
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
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {existingPositions.position_name}
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

      
            

    </>
  );
};

export default PlayerCard;
