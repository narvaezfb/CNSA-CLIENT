import React, { useState, useEffect } from "react";
import axios from "axios";

import InformationCardWrapper from "../InformationWrapper";
import { gridSpacing } from "store/constant";

// mui-ui
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@material-ui/icons/AddRounded";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

// material-ui
import { Grid, Button } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PlayerStatisticsForm from "views/pages/Forms/PlayerStatisticsForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70% ",
  bgcolor: "background.paper",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
};

const cardStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40% ",
  bgcolor: "background.paper",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
};

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function PlayerStatisticsTable() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openPlayerCard, setOpenPlayerCard] = React.useState(false);
  const handleOpenPlayerCard = () => setOpenPlayerCard(true);
  const handleClosePlayerCard = () => setOpenPlayerCard(false);
  const [existingPlayers, setExistingPlayers] = useState();
  /* eslint-disable no-unused-vars */
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [selectedRow, setSelectedRow] = React.useState([]);

  //Load data from APIs
  useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = () => {
    return axios
      .get("/cnsa/v1/playerStatistics")
      .then((response) => {
        setExistingPlayers(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  const columns = [
    { field: "player_id", headerName: "#", width: 200 },
    {
      field: "player_email_address",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
      valueGetter: (params) =>
        `${params.getValue(params.id, "player_first_name") || ""} ${
          params.getValue(params.id, "player_last_name") || ""
        }`,
    },
    {
      field: "player_date_of_birth",
      headerName: "Age",
      type: "date",
      width: 200,
      valueGetter: ({ value }) => value && new Date(value),
    },
    { field: "ranking", headerName: "Ranking", type: "number", width: 200 },
    {
      field: "actions",
      type: "actions",
      width: 200,
      renderCell: () => {
        return (
          <Typography variant="h3">
            <IconButton onClick={handleOpenPlayerCard}>
              <VisibilityIcon />
            </IconButton>
            <Modal
              open={openPlayerCard}
              onClose={handleClosePlayerCard}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={cardStyle}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 25 }}
                      color="text.primary"
                      align="center"
                      gutterBottom
                    >
                      <span>{selectedRow.player_first_name} </span>
                      <span className="second-word-formatting">
                        {selectedRow.player_last_name}
                      </span>
                    </Typography>
                    <Typography
                      variant="h4"
                      component="div"
                      align="center"
                      color="text.secondary"
                    >
                      {selectedRow.position_name} {bull} {selectedRow.team_name}
                    </Typography>
                    <Typography sx={{ fontSize: 18 }} color="text.secondary">
                      Statistics for game ID: {selectedRow.game_id}
                    </Typography>
                    <Typography variant="body2">
                      Goal Kick: {selectedRow.player_goal_kick}
                    </Typography>
                    <Typography variant="body2">
                      Corner Kick: {selectedRow.player_corner_kick}
                    </Typography>
                    <Typography variant="body2">
                      Penalty Kick: {selectedRow.player_penalty_kick}
                    </Typography>
                    <Typography variant="body2">
                      Player Turnover: {selectedRow.player_turnovers}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} variant="body2">
                      Player Passes: {selectedRow.player_passes}
                    </Typography>
                    <Typography sx={{ fontSize: 18 }} color="text.secondary">
                      Flags
                    </Typography>
                    <Typography variant="body2">
                      Yellow Cards: {selectedRow.player_yellow_cards}
                    </Typography>
                    <Typography variant="body2">
                      Red Cards: {selectedRow.player_red_cards}
                    </Typography>
                    <Typography variant="body2">
                      Fouls: {selectedRow.player_fouls}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Box>
            </Modal>
          </Typography>
        );
      },
    },
  ];

  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: "calc(100vh - 68px)" }}
          >
            <Typography variant="h1">Player Statistics</Typography>
            <InformationCardWrapper>
              <Box
                sx={{
                  mb: 2,
                }}
              >
                <Typography variant="h3">
                  Add New
                  <IconButton onClick={handleOpen}>
                    <AddIcon />
                  </IconButton>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <PlayerStatisticsForm />
                    </Box>
                  </Modal>
                </Typography>
              </Box>
              <div style={{ height: 400, width: 1000 }}>
                <DataGrid
                  onSelectionModelChange={(ids) => {
                    const selectedIDs = new Set(ids);
                    const selectedRows = existingPlayers.filter((row) =>
                      selectedIDs.has(row.player_id)
                    );
                    const selectedRow = selectedRows[0];
                    setSelectedRows(selectedRows);
                    setSelectedRow(selectedRow);
                  }}
                  getRowId={(existingPlayers) => existingPlayers.player_id}
                  rows={existingPlayers}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                />
              </div>
            </InformationCardWrapper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
