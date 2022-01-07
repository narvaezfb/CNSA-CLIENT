import React, { useState, useEffect } from "react";
import axios from "axios";

import InformationCardWrapper from "../InformationWrapper";
import TeamForm from "../../Forms/TeamForm";
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

const columns = [
  { field: "team_id", headerName: "Team ID", width: 200 },
  { field: "team_name", headerName: "Team name", width: 250 },
  { field: "school_name", headerName: "School", width: 200 },
];

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

export default function TeamTable() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [existingTeams, setExistingTeams] = useState();

  //Load data from APIs
  useEffect(() => {
    getTeams();
  }, []);

  const getTeams = () => {
    return axios
      .get("/cnsa/v1/teams")
      .then((response) => {
        setExistingTeams(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => console.log(err));
  };

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
            <Typography variant="h1">Team Information </Typography>
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
                      <TeamForm />
                    </Box>
                  </Modal>
                </Typography>
              </Box>
              <div style={{ height: 400, width: 1000 }}>
                <DataGrid
                  getRowId={(existingTeams) => existingTeams.team_id}
                  rows={existingTeams}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection
                />
              </div>
            </InformationCardWrapper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
