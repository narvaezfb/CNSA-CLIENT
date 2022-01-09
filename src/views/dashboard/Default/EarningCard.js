import PropTypes from "prop-types";
import React from "react";
import axios from "axios";
import { useEffect } from "react";

// material-ui
import { makeStyles } from "@material-ui/styles";
import { Avatar, Grid, Menu, MenuItem, Typography } from "@material-ui/core";

// project imports
import MainCard from "ui-component/cards/MainCard";
import SkeletonEarningCard from "ui-component/cards/Skeleton/EarningCard";

// assets
import CancelIcon from "@material-ui/icons/CancelOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import GetAppTwoToneIcon from "@material-ui/icons/GetAppOutlined";
import FileCopyTwoToneIcon from "@material-ui/icons/FileCopyOutlined";
import PictureAsPdfTwoToneIcon from "@material-ui/icons/PictureAsPdfOutlined";
import ArchiveTwoToneIcon from "@material-ui/icons/ArchiveOutlined";

// style constant
const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.secondary.dark,
    color: "#fff",
    overflow: "hidden",
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      width: "210px",
      height: "210px",
      background: theme.palette.secondary[800],
      borderRadius: "50%",
      top: "-85px",
      right: "-95px",
      [theme.breakpoints.down("xs")]: {
        top: "-105px",
        right: "-140px",
      },
    },
    "&:before": {
      content: '""',
      position: "absolute",
      width: "210px",
      height: "210px",
      background: theme.palette.secondary[800],
      borderRadius: "50%",
      top: "-125px",
      right: "-15px",
      opacity: 0.5,
      [theme.breakpoints.down("xs")]: {
        top: "-155px",
        right: "-70px",
      },
    },
  },
  content: {
    padding: "20px !important",
  },
  avatar: {
    ...theme.typography.commonAvatar,
    ...theme.typography.largeAvatar,
    backgroundColor: theme.palette.secondary[800],
    marginTop: "8px",
  },
  avatarRight: {
    ...theme.typography.commonAvatar,
    ...theme.typography.mediumAvatar,
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary[200],
    zIndex: 1,
  },
  cardHeading: {
    fontSize: "2.125rem",
    fontWeight: 500,
    marginRight: "8px",
    marginTop: "14px",
    marginBottom: "6px",
  },
  subHeading: {
    fontSize: "1rem",
    fontWeight: 500,
    color: theme.palette.secondary[200],
  },
  avatarCircle: {
    cursor: "pointer",
    ...theme.typography.smallAvatar,
    backgroundColor: theme.palette.secondary[200],
    color: theme.palette.secondary.dark,
  },
  circleIcon: {
    transform: "rotate3d(1, 1, 1, 45deg)",
  },
  menuItem: {
    marginRight: "14px",
    fontSize: "1.25rem",
  },
}));

//= ==========================|| DASHBOARD DEFAULT - EARNING CARD ||===========================//

const EarningCard = ({ isLoading }) => {
  const [totalRecIncident, setTotalRecIncident] = React.useState();

  //Load data from APIs
  useEffect(() => {
    getTotalRecIncident();
  }, []);

  const getTotalRecIncident = () => {
    return axios
      .get("https://cnsa-server.nn.r.appspot.com/cnsa/v1/dashboard")
      .then((response) => {
        setTotalRecIncident(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => console.log(err));
  };
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <MainCard
          border={false}
          className={classes.card}
          contentClass={classes.content}
        >
          <Grid container direction="column">
            <Grid item>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Avatar variant="rounded" className={classes.avatar}>
                    <CancelIcon />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar
                    variant="rounded"
                    className={classes.avatarRight}
                    aria-controls="menu-earning-card"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreHorizIcon fontSize="inherit" />
                  </Avatar>
                  <Menu
                    id="menu-earning-card"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    variant="selectedMenu"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <GetAppTwoToneIcon
                        fontSize="inherit"
                        className={classes.menuItem}
                      />{" "}
                      Import Card
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <FileCopyTwoToneIcon
                        fontSize="inherit"
                        className={classes.menuItem}
                      />{" "}
                      Copy Data
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <PictureAsPdfTwoToneIcon
                        fontSize="inherit"
                        className={classes.menuItem}
                      />{" "}
                      Export
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ArchiveTwoToneIcon
                        fontSize="inherit"
                        className={classes.menuItem}
                      />{" "}
                      Archive File
                    </MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="center">
                <Grid item>
                  {totalRecIncident?.map((total) => (
                    <Typography className={classes.cardHeading}>
                      {total.count}
                    </Typography>
                  ))}
                </Grid>
                <Grid item>
                  <Avatar className={classes.avatarCircle}>
                    <ArrowUpwardIcon
                      fontSize="inherit"
                      className={classes.circleIcon}
                    />
                  </Avatar>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ mb: 1.25 }}>
              <Typography className={classes.subHeading}>
                Total Players
              </Typography>
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

EarningCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default EarningCard;
