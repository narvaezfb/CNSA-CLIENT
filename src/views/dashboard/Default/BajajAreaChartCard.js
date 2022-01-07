import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';

// material-ui
import { makeStyles, useTheme } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import chartData from './chart-data/bajaj-area-chart';

// style constant
const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.secondary.light
    },
    content: {
        padding: '0px !important'
    },
    contentContainer: {
        padding: '16px',
        paddingBottom: 0,
        color: '#fff'
    },
    fontStyle: {
        fontWeight: 400
    }
}));

//= ==========================|| DASHBOARD DEFAULT - BAJAJ AREA CHART CARD ||===========================//

const BajajAreaChartCard = () => {

    const [maxRanking, setMaxRanking] = React.useState();

    //Load data from APIs
    useEffect(() => {
        getMaxRanking();
    }, []);

    const getMaxRanking = () => {
        return axios
          .get("/cnsa/v1/maxRanking")
          .then((response) => {
            setMaxRanking(response.data.data);
            console.log(response.data.data);
          })
          .catch((err) => console.log(err));
      };


    const classes = useStyles();
    const theme = useTheme();

    const orangeDark = theme.palette.secondary[800];

    React.useEffect(() => {
        const newSupportChart = {
            ...chartData.options,
            colors: [orangeDark],
            tooltip: {
                theme: 'light'
            }
        };
        ApexCharts.exec(`support-chart`, 'updateOptions', newSupportChart);
    }, [orangeDark]);

    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Grid container className={classes.contentContainer}>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                            {maxRanking?.map(maxRank => (
                                    <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.dark }}>
                                        {maxRank.player_first_name}
                                    </Typography>
                                ))}


                                
                            </Grid>
                            <Grid item>
                            {maxRanking?.map(maxRank => (
                                <Typography variant="h4" sx={{ color: theme.palette.grey[800] }}>
                                    {maxRank.ranking}
                                </Typography>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Grid>
                <Chart {...chartData} />
            </CardContent>
        </Card>
    );
};

export default BajajAreaChartCard;
