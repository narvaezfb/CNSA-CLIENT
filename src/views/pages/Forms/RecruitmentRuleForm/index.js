import React, { useState } from "react";
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

const RecruitmentRuleForm = () => {
  const classes = useStyles();
  //Player data that will be stored
  const [ruleName, setRuleName] = useState();
  const [ruleDescription, setRuleDescription] = useState();

  //This function will send the data to the Create Team API
  const submitRecruitmentForm = async () => {


    //gather all data that will be sent
    const data = {
      rule_name: ruleName,
      rule_description: ruleDescription,
    };

    //Using axios for the POST Request
    const result = await axios({
      method: "POST",
      headers: { "content-type": "application/json" },
      url: "/cnsa/v1/recRules",
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
            <Typography variant="h3">Recruitment Rule Entry Form</Typography>
          </Box>
        </Grid>
      </Grid>

      <form onSubmit={submitRecruitmentForm}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.Input}>
              <InputLabel htmlFor="first-name">Rule Name</InputLabel>
              <OutlinedInput
                id="first-name"
                type="text"
                value={ruleName}
                onChange={(e) => setRuleName(e.target.value)}
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
            <FormControl fullWidth className={classes.Input}>
              <InputLabel htmlFor="first-name">Rule Description</InputLabel>
              <OutlinedInput
                id="last-name"
                type="text"
                value={ruleDescription}
                onChange={(e) => setRuleDescription(e.target.value)}
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

export default RecruitmentRuleForm;
