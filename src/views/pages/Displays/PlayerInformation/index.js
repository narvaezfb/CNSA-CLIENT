import React, { useState, useEffect } from "react";
import axios from "axios";

import InformationCardWrapper from "../InformationWrapper";
import PlayerForm from "../../Forms/PlayerForm";
import { gridSpacing } from "store/constant";

// mui-ui
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@material-ui/icons/AddRounded";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

// material-ui
import { Grid } from "@material-ui/core";

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

export default function PlayerTable() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [existingPlayers, setExistingPlayers] = useState();

  //Load data from APIs
  useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = () => {
    return axios
      .get("https://cnsa-server.nn.r.appspot.com/cnsa/v1/players")
      .then((response) => {
        setExistingPlayers(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  const columns = [
    { field: "player_id", headerName: "#", width: 90 },
    {
      field: "player_email_address",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 180,
      valueGetter: (params) =>
        `${params.getValue(params.id, "player_first_name") || ""} ${
          params.getValue(params.id, "player_last_name") || ""
        }`,
    },
    {
      field: "player_date_of_birth",
      headerName: "Age",
      type: "date",
      width: 180,
      valueGetter: ({ value }) => value && new Date(value),
    },

    {
      field: "position_name",
      headerName: "Position",
      type: "text",
      width: 180,
    },
    { field: "team_name", headerName: "Team", type: "text", width: 180 },
    { field: "ranking", headerName: "Ranking", type: "number", width: 180 },
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
            <Typography variant="h1">Player Information</Typography>
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
                      <PlayerForm />
                    </Box>
                  </Modal>
                </Typography>
              </Box>
              <div style={{ height: 400, width: 1000 }}>
                <DataGrid
                  getRowId={(existingPlayers) => existingPlayers.player_id}
                  rows={existingPlayers}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[12]}
                />
              </div>
            </InformationCardWrapper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
