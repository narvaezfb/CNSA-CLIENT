import React from "react";
import { useSelector } from "react-redux";
import AuthWrapper1 from "../../authentication/AuthWrapper1";
import IncidentCardWrapper from "../FormWrapper";

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

//= ===========================|| INCIDENT - FORM ||============================//

const IncidentForm = () => {
  const classes = useStyles();
  const customization = useSelector((state) => state.customization);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <AuthWrapper1>
        <Grid
          container
          direction="column"
          justifyContent="flex-end"
          sx={{ minHeight: "100vh" }}
        >
          <Grid item xs={12}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{ minHeight: "calc(100vh - 68px)" }}
            >
              <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                <IncidentCardWrapper>
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
                        <Typography variant="h3">Injury Form</Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <form>
                    <Grid container spacing={2}>

                      
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <TextField
                            id="datetime-local"
                            label="Date and time of Injury"
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            sx={{ minWidth: 250 }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </FormControl>
                      </Grid>

                      
                      
                      <Grid item xs={12}>
                        <FormControl fullWidth className={classes.Input}>
                          <InputLabel htmlFor="description">
                            Description
                          </InputLabel>
                          <OutlinedInput
                            id="description"
                            type="text"
                            name="description"
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
                        <Box autoWidth="true" sx={{ minWidth: 260 }}>
                          <FormControl fullWidth className={classes.Input}>
                            <InputLabel id="demo-simple-select-label">
                              Select Location of Injury
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Age"
                              onChange={handleChange}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
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
                              Player Details
                            </Button>
                          </AnimateButton>
                          <Divider
                            className={classes.signDivider}
                            orientation="horizontal"
                          />
                        </Box>
                      </Grid>

                      <Grid item xs={12}>
                        <Box autoWidth="true" sx={{ minWidth: 260 }}>
                          <FormControl fullWidth className={classes.Input}>
                            <InputLabel id="demo-simple-select-label">
                              Select Player
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Age"
                              onChange={handleChange}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
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
                </IncidentCardWrapper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AuthWrapper1>
    </>
  );
};

export default IncidentForm;
