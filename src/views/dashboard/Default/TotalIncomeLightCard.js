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
import SportsOutlinedIcon from "@material-ui/icons/SportsOutlined";

// style constant
const useStyles = makeStyles((theme) => ({
  card: {
    overflow: "hidden",
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      width: "210px",
      height: "210px",
      background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
      borderRadius: "50%",
      top: "-30px",
      right: "-180px",
    },
    "&:before": {
      content: '""',
      position: "absolute",
      width: "210px",
      height: "210px",
      background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
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
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.warning.dark,
  },
  secondary: {
    color: theme.palette.grey[500],
    marginTop: "5px",
  },
  padding: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

// ===========================|| DASHBOARD - TOTAL INCOME LIGHT CARD ||=========================== //

const TotalIncomeLightCard = ({ isLoading }) => {
  const [totalCoaches, setTotalCoaches] = React.useState();

  //Load data from APIs
  useEffect(() => {
    getTotalCoaches();
  }, []);

  const getTotalCoaches = () => {
    return axios
      .get("/cnsa/v1/totalCoaches")
      .then((response) => {
        setTotalCoaches(response.data.data);
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
        <MainCard className={classes.card} contentClass={classes.content}>
          <Grid container direction="column">
            <Grid item>
              <Grid container alignItems="center">
                <Grid item>
                  <Avatar variant="rounded" className={classes.avatar}>
                    <SportsOutlinedIcon fontSize="inherit" />
                  </Avatar>
                </Grid>

                <Grid item>
                  {totalCoaches?.map((total) => (
                    <Typography className={classes.cardHeading}>
                      {total.count}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ mb: 1.25 }}>
              <Typography className={classes.subHeading}>
                Total Coaches
              </Typography>
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

TotalIncomeLightCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default TotalIncomeLightCard;
