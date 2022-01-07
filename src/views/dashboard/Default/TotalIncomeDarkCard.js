import PropTypes from "prop-types";
import React from "react";
import axios from "axios";
import { useEffect } from "react";

// material-ui
import { makeStyles } from "@material-ui/styles";
import { Avatar, Typography, Grid } from "@material-ui/core";

// project imports
import MainCard from "ui-component/cards/MainCard";
import TotalIncomeCard from "ui-component/cards/Skeleton/TotalIncomeCard";

// assets
import SportsIcon from "@material-ui/icons/SportsSoccer";

// style constant
const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
    overflow: "hidden",
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      width: "210px",
      height: "210px",
      background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
      borderRadius: "50%",
      top: "-30px",
      right: "-180px",
    },
    "&:before": {
      content: '""',
      position: "absolute",
      width: "210px",
      height: "210px",
      background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
      borderRadius: "50%",
      top: "-160px",
      right: "-130px",
    },
  },
  content: {
    padding: "16px !important",
  },
  avatar: {
    ...theme.typography.commonAvatar,
    ...theme.typography.largeAvatar,
    backgroundColor: theme.palette.primary[800],
    color: "#fff",
  },
  primary: {
    color: "#fff",
  },
  secondary: {
    color: theme.palette.primary.light,
    marginTop: "5px",
  },
  padding: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

// ===========================|| DASHBOARD - TOTAL INCOME DARK CARD ||=========================== //

const TotalIncomeDarkCard = ({ isLoading }) => {
  const [totalPlayers, setTotalPlayers] = React.useState();

  //Load data from APIs
  useEffect(() => {
    getTotalPlayers();
  }, []);

  const getTotalPlayers = () => {
    return axios
      .get("/cnsa/v1/totalRecIncident")
      .then((response) => {
        setTotalPlayers(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => console.log(err));
  };
  const classes = useStyles();

  return (
    <>
      {isLoading ? (
        <TotalIncomeCard />
      ) : (
        <MainCard
          border={false}
          className={classes.card}
          contentClass={classes.content}
        >
          <Grid container direction="column">
            <Grid item>
              <Grid container alignItems="center">
                <Grid item>
                  <Avatar variant="rounded" className={classes.avatar}>
                    <SportsIcon fontSize="inherit" />
                  </Avatar>
                </Grid>

                <Grid item>
                  {totalPlayers?.map((total) => (
                    <Typography className={classes.cardHeading}>
                      {total.count}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ mb: 1.25 }}>
              <Typography className={classes.subHeading}>
                Total Recruitment Incidents
              </Typography>
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

TotalIncomeDarkCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default TotalIncomeDarkCard;
