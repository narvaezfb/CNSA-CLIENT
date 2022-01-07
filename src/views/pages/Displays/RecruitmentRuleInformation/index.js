import React, { useState, useEffect } from "react";
import axios from "axios";

import InformationCardWrapper from "../InformationWrapper";
import GameForm from "../../Forms/GameForm";
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
import RecruitmentRuleForm from "views/pages/Forms/RecruitmentRuleForm";

const columns = [
  { field: "recruitment_rule_id", headerName: "Recruitment Rule ID", width: 180 },
  { field: "rule_name", headerName: "Rule Name ", width: 200  },
  { field: "rule_description", headerName: "Rule Description", width: 700 },
  
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

export default function RecruitmentTable() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [existingRules, setExistingRules] = useState();

  //Load data from APIs
  useEffect(() => { 
    getRules();
  }, []);

  const getRules = () => {
    return axios
      .get("/cnsa/v1/recRules")
      .then((response) => {
        setExistingRules(response.data.data);
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
            <Typography variant="h1">Recruitment Rule Information</Typography>
            <InformationCardWrapper>
              <Box
                sx={{
                  mb: 2,
                }}
              >
                <Typography variant="h3">
                  Add New Rule
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
                      <RecruitmentRuleForm />
                    </Box>
                  </Modal>
                </Typography>
              </Box>
              <div style={{ height: 400, width: 1000 }}>
                <DataGrid
                  getRowId={(existingRules) => existingRules.recruitment_rule_id}
                  rows={existingRules}
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