import PropTypes from "prop-types";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// material-ui
import { Grid, Typography, useTheme } from "@material-ui/core";

// third-party
import ApexCharts from "apexcharts";

// project imports
import SkeletonTotalGrowthBarChart from "ui-component/cards/Skeleton/TotalGrowthBarChart";
import MainCard from "ui-component/cards/MainCard";
import { gridSpacing } from "store/constant";

// chart data
import chartData from "./chart-data/total-growth-bar-chart";

// ===========================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||=========================== //

const TotalGrowthBarChart = ({ isLoading }) => {
  const [totalGames, setTotalGames] = React.useState();
  const [gameStats, setGameStats] = React.useState();

  //Load data from APIs
  useEffect(() => {
    getTotalGames();
    getGameStats();
  }, []);

  const getTotalGames = () => {
    return axios
      .get("/cnsa/v1/totalGames")
      .then((response) => {
        setTotalGames(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  const getGameStats = () => {
    return axios
      .get("/cnsa/v1/gameStatistics")
      .then((response) => {
        setGameStats(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  const theme = useTheme();

  const { primary } = theme.palette.text;
  const grey200 = theme.palette.grey[200];

  const primary200 = theme.palette.primary[200];
  const primaryDark = theme.palette.primary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const secondaryLight = theme.palette.secondary.light;
  const grey500 = theme.palette.grey[500];

  React.useEffect(() => {
    const newChartData = {
      ...chartData.options,
      colors: [primary200, primaryDark, secondaryMain, secondaryLight],
      xaxis: {
        labels: {
          style: {
            colors: [
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
            ],
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: [primary],
          },
        },
      },
      grid: {
        borderColor: grey200,
      },
      tooltip: {
        theme: "light",
      },
      legend: {
        labels: {
          colors: grey500,
        },
      },
    };

    // do not load chart when loading
    if (!isLoading) {
      ApexCharts.exec(`bar-chart`, "updateOptions", newChartData);
    }
  }, [
    primary200,
    primaryDark,
    secondaryMain,
    secondaryLight,
    primary,
    grey200,
    isLoading,
    grey500,
  ]);

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle2">Total Games</Typography>
                    </Grid>
                    <Grid item>
                      {totalGames?.map((total) => (
                        <Typography variant="h3">{total.count}</Typography>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 400, minHeight: 250 }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Month</TableCell>
                      <TableCell align="right">Total Games Played</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {gameStats?.map((row) => (
                      <TableRow
                        key={row.count}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.monthname}
                        </TableCell>
                        <TableCell align="right">{row.count}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

TotalGrowthBarChart.propTypes = {
  isLoading: PropTypes.bool,
};

export default TotalGrowthBarChart;
