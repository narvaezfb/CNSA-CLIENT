import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import AuthWrapper1 from "../../authentication/AuthWrapper1";
import PlayerCardWrapper from "../FormWrapper";

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

//= ===========================|| STADIUM - FORM ||============================//

const StadiumForm = () => {
  const classes = useStyles();
  const customization = useSelector((state) => state.customization);

  //Player data that will be stored
  const [stadiumCapacity, setStadiumCapacity] = useState();
  const [location, setLocation] = useState();
  const [existingLocations, setExistingLocations] = useState();

  //Load data from APIs
  useEffect(() => {
    getLocations();
  }, []);

  //Get Existing Locations from Location API
  const getLocations = () => {
    return axios
      .get("/cnsa/v1/locations")
      .then((response) => {
        setExistingLocations(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  //This function will send the data to the Create Team API
  const submitStadium = async () => {
    //gather all data that will be sent
    const data = {
      stadium_capacity: stadiumCapacity,
      location_id: location,
    };

    //Using axios for the POST Request
    const result = await axios({
      method: "POST",
      headers: { "content-type": "application/json" },
      url: "/cnsa/v1/stadiums",
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
 <AuthWrapper1>
              <Grid container sx={{ m: { xs: 1, sm: 3 }, mb: 0 }} justifyContent="center" >
                <PlayerCardWrapper>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    spacing={2}
                  >
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
                        <Typography variant="h3">Stadium Entry Form</Typography>
                      </Box>
                    </Grid>
                  </Grid>
      

                  <form onSubmit={submitStadium}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <FormControl fullWidth className={classes.Input}>
                          <InputLabel htmlFor="stadium-capacity">
                            Stadium Capacity
                          </InputLabel>
                          <OutlinedInput
                            id="stadium-capacity"
                            type="text"
                            value={stadiumCapacity}
                            onChange={(e) => setStadiumCapacity(e.target.value)}
                            name="stadiumCapacity"
                            label="Stadium Capacity"
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
                              Address Details
                            </Button>
                          </AnimateButton>
                          <Divider
                            className={classes.signDivider}
                            orientation="horizontal"
                          />
                        </Box>
                      </Grid>

                      <Grid item xs={12}>
                        <Box autoWidth="true" sx={{ minWidth: 250 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-customized-select-native">
                              Select Stadium
                            </InputLabel>
                            <Select
                              labelId="demo-customized-select-native"
                              id="demo-customized-select-native"
                              value={location}
                              input={<OutlinedInput label="Select Stadium"/>}
                              onChange={(e) => setLocation(e.target.value)}
                            >
                              {existingLocations?.map((location, index) => (
                                <MenuItem
                                  key={index}
                                  value={location.location_id}
                                >
                                  {location.location_name}
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
                  </PlayerCardWrapper>
              </Grid>
      </AuthWrapper1>
    </>
  );
};

export default StadiumForm;
