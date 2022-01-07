import React, { useState, useEffect } from "react";
import axios from "axios";
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

//= ===========================|| LOCATION - FORM ||============================//

const LocationForm = () => {
  const classes = useStyles();

  //Player data that will be stored
  const [locationName, setLocationName] = useState();
  const [locationStreetAddress, setLocationStreetAddress] = useState();
  const [locationZipCode, setLocationZipCode] = useState();
  const [locationCity, setLocationCity] = useState();
  const [province, setProvince] = useState(0);
  const [existingProvinces, setExistingProvinces] = useState();
  const [locationCountry, setLocationCountry] = useState();
  
  //Load data from APIs
  useEffect(() => {
    getProvinces();
  }, []);

  //Get Existing teams from Teams API
  const getProvinces = () => {
    return axios
      .get("/cnsa/v1/provinces")
      .then((response) => {
        setExistingProvinces(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  //This function will send the data to the Create Team API
  const submitLocation = async () => {
    //gather all data that will be sent
    const data = {
      location_name : locationName,
      location_street_address : locationStreetAddress,
      location_zipcode : locationZipCode,
      location_city : locationCity,
      province_id : province,
      country : locationCountry,
    };

    //Using axios for the POST Request
    const result = await axios({
      method: "POST",
      headers: { "content-type": "application/json" },
      url: "/cnsa/v1/locations",
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
                        <Typography variant="h3">Location Entry Form</Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <form onSubmit={submitLocation}>
                    <Grid container spacing={2}>
                      <Grid item xs={6} md={6}>
                        <FormControl fullWidth className={classes.Input}>
                          <InputLabel htmlFor="location-name">
                            Location Name
                          </InputLabel>
                          <OutlinedInput
                            id="location-name"
                            type="text"
                            value={locationName}
                            onChange={(e) => setLocationName(e.target.value)}
                            name="locationName"
                            label="Location Name"
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
                          <InputLabel htmlFor="location-street-address">
                            Street Address
                          </InputLabel>
                          <OutlinedInput
                            id="location-street-address"
                            type="text"
                            value={locationStreetAddress}
                            onChange={(e) => setLocationStreetAddress(e.target.value)}
                            name="locationStreetAddress"
                            label="Location Street Address"
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
                          <InputLabel htmlFor="location-zip-code">
                            Zip Code
                          </InputLabel>
                          <OutlinedInput
                            id="location-zip-code"
                            type="text"
                            value={locationZipCode}
                            onChange={(e) => setLocationZipCode(e.target.value)}
                            name="locationZipCode"
                            label="Location Zip Code (e.g L1B0T6)"
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
                          <InputLabel htmlFor="location-city">
                            City
                          </InputLabel>
                          <OutlinedInput
                            id="location-city"
                            type="text"
                            value={locationCity}
                            onChange={(e) => setLocationCity(e.target.value)}
                            name="locationCity"
                            label="Location City"
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
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Select Province
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={province}
                              label="province"
                              input={<OutlinedInput label="Select Province"/>}
                              onChange={(e) => setProvince(e.target.value)}
                            >
                              {existingProvinces?.map((province, index) => (
                                <MenuItem key={index} value={province.province_id}>
                                  {province.province_name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Box>
                      </Grid>

                      <Grid item xs={12}>
                        <FormControl fullWidth className={classes.Input}>
                          <InputLabel htmlFor="location-country">
                            Country
                          </InputLabel>
                          <OutlinedInput
                            id="location-country"
                            type="text"
                            value={locationCountry}
                            onChange={(e) => setLocationCountry(e.target.value)}
                            name="country"
                            label="Location Country"
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
                </PlayerCardWrapper>
              </Grid>
      </AuthWrapper1>
    </>
  );
};

export default LocationForm;
