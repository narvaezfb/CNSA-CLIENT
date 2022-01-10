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

// material-ui
import { Grid } from "@material-ui/core";
import RecruitmentIncidentForm from "views/pages/Forms/RecruitmentIncidentForm";

const columns = [
  { field: "game_id", headerName: "Game ID", width: 150 },
  { field: "incident_id", headerName: "Incident # ", width: 200 },
  {
    field: "incident_date",
    headerName: "Incident Date",
    width: 200,
    valueGetter: ({ value }) => value && new Date(value),
  },

  {
    field: "incident_comments",
    headerName: "Incident Comments",
    type: "text",
    width: 400,
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50% ",
  bgcolor: "background.paper",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
};

export default function RecruitmentIncidentTable() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [existingRecruitmentIncidents, setExistingRecruitmentIncidents] =
    useState();

  //Load data from APIs
  useEffect(() => {
    getRecIncidents();
  }, []);

  const getRecIncidents = () => {
    return axios
      .get("https://cnsa-server.nn.r.appspot.com/cnsa/v1/recIncident")
      .then((response) => {
        setExistingRecruitmentIncidents(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Typography variant="h1">Recruitment Information</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            // sx={{ minHeight: "calc(100vh - 68px)" }}
          >
            {/* <Typography variant="h1">Recruitment Information</Typography> */}
            <InformationCardWrapper>
              <Box
                sx={{
                  mb: 2,
                }}
              >
                <Typography variant="h3">
                  Add New Recruitment Incident
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
                      <RecruitmentIncidentForm />
                    </Box>
                  </Modal>
                </Typography>
              </Box>
              <div style={{ height: 400, width: 1000 }}>
                <DataGrid
                  getRowId={(existingRecruitmentIncidents) =>
                    existingRecruitmentIncidents.incident_id
                  }
                  rows={existingRecruitmentIncidents}
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
