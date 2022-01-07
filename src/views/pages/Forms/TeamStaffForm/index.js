import React from "react";
// import { useSelector } from "react-redux";
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
  TextField,
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

const TeamStaffForm = () => {
  const classes = useStyles();
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
                        <Typography variant="h3">Team Staff Form</Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <form>
                    <Grid container spacing={2}>
                      <Grid item xs={6} md={6}>
                        <FormControl fullWidth className={classes.Input}>
                          <InputLabel htmlFor="first-name">
                            First Name
                          </InputLabel>
                          <OutlinedInput
                            id="first-name"
                            type="text"
                            value=""
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
                          <InputLabel htmlFor="first-name">
                            Last Name
                          </InputLabel>
                          <OutlinedInput
                            id="first-name"
                            type="text"
                            value=""
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

                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <TextField
                            id="datetime-local"
                            label="Date of Birth"
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
                          <InputLabel htmlFor="first-name">
                            Email Address
                          </InputLabel>
                          <OutlinedInput
                            id="first-name"
                            type="text"
                            value=""
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
                        <Box autoWidth="true" sx={{ minWidth: 260 }}>
                          <FormControl fullWidth className={classes.Input}>
                            <InputLabel id="demo-simple-select-label">
                              Select team
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

                      <Grid item xs={6} md={6}>
                        <Box autoWidth="true" sx={{ minWidth: 260 }}>
                          <FormControl fullWidth className={classes.Input}>
                            <InputLabel id="demo-simple-select-label">
                              Select Staff Type
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
                </PlayerCardWrapper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AuthWrapper1>
    </>
  );
};

export default TeamStaffForm;
