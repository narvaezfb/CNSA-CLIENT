import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Avatar, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography } from '@material-ui/core';

// project imports
import BajajAreaChartCard from './BajajAreaChartCard';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';

// assets
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import KeyboardArrowUpOutlinedIcon from '@material-ui/icons/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';

// style constant

const useStyles = makeStyles((theme) => ({
    cardAction: {
        padding: '10px',
        paddingTop: 0,
        justifyContent: 'center'
    },
    primaryLight: {
        color: theme.palette.primary[200],
        cursor: 'pointer'
    },
    divider: {
        marginTop: '12px',
        marginBottom: '12px'
    },
    avatarSuccess: {
        width: '16px',
        height: '16px',
        borderRadius: '5px',
        backgroundColor: theme.palette.success.light,
        color: theme.palette.success.dark,
        marginLeft: '15px'
    },
    successDark: {
        color: theme.palette.success.dark
    },
    avatarError: {
        width: '16px',
        height: '16px',
        borderRadius: '5px',
        backgroundColor: theme.palette.orange.light,
        color: theme.palette.orange.dark,
        marginLeft: '15px'
    },
    errorDark: {
        color: theme.palette.orange.dark
    }
}));

// ===========================|| DASHBOARD DEFAULT - POPULAR CARD ||=========================== //

const PopularCard = ({ isLoading }) => {

    const [topPlayers, setTopPlayers] = React.useState();


    //Load data from APIs
    useEffect(() => {
        getTopPlayers();
    }, []);

    const getTopPlayers = () => {
        return axios
          .get("/cnsa/v1/topPlayer")
          .then((response) => {
            setTopPlayers(response.data.data);
            console.log(response.data.data);
          })
          .catch((err) => console.log(err));
    };
    
    
    const classes = useStyles();   
    

    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <MainCard content={false}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h4">Top Players</Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{ pt: '16px !important' }}>
                            <BajajAreaChartCard/>
                           
                            </Grid>
                            <Grid item xs={12}>
                                {topPlayers?.map(player => (
                                    <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    {player.player_first_name}  {player.player_last_name}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            {player.ranking}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        {player.ranking <= 9 && // If expression is true render this
                                                            <Avatar variant="rounded" className={classes.avatarSuccess}>
                                                                <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" /> 
                                                            </Avatar>
                                                        }
                                                        {player.ranking > 9 && // If expression is true render this
                                                           <Avatar variant="rounded" className={classes.avatarError}>
                                                                <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                                                            </Avatar>
                                                        }
                                                    </Grid>
                                                    
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                
                                ))}
                               
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions className={classes.cardAction}>
                    <Link style={{ textDecoration: 'none' }} to="/player-information">
                        <Button size="small" disableElevation>
                            View All
                        <ChevronRightOutlinedIcon />
                    </Button>
                    </Link>
                    </CardActions>
                </MainCard>
            )}
        </>
    );
};

PopularCard.propTypes = {
    isLoading: PropTypes.bool
};

export default PopularCard;
