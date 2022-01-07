import React from "react";
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

const SchoolForm = () => {
  const classes = useStyles();
  const customization = useSelector((state) => state.customization);

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
                        <Typography variant="h3">School Form</Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <form>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <FormControl fullWidth className={classes.Input}>
                          <InputLabel htmlFor="first-name">
                            School Name
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

                      <Grid item xs={6} md={6}>
                        <FormControl fullWidth className={classes.Input}>
                          <InputLabel htmlFor="date-of-birth">
                            Street Address
                          </InputLabel>
                          <OutlinedInput
                            id="date-of-birth"
                            type="text"
                            value=""
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
                          <InputLabel htmlFor="date-of-birth">
                            Zipcode
                          </InputLabel>
                          <OutlinedInput
                            id="date-of-birth"
                            type="text"
                            value=""
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
                          <InputLabel htmlFor="date-of-birth">
                            City
                          </InputLabel>
                          <OutlinedInput
                            id="date-of-birth"
                            type="text"
                            value=""
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
                          <InputLabel htmlFor="date-of-birth">
                            Country
                          </InputLabel>
                          <OutlinedInput
                            id="date-of-birth"
                            type="text"
                            value=""
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

export default SchoolForm;
