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

const columns = [
  { field: "game_id", headerName: "Game ID", width: 150 },
  // {
  //   field: "player_email_address",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 200,
  //   valueGetter: (params) =>
  //     `${params.getValue(params.id, "player_first_name") || ""} ${
  //       params.getValue(params.id, "player_last_name") || ""
  //     }`,
  // },
  { field: "vistor_team", headerName: "Visitor Team ", width: 200 },
  { field: "local_team", headerName: "Local Team", width: 200 },
  {
    field: "visitor_team_score",
    headerName: "Vistor Score",
    type: "number",
    width: 150,
  },

  {
    field: "home_team_score",
    headerName: "Home Score",
    type: "number",
    width: 150,
  },
  { field: "game_type", headerName: "Game Type", type: "number", width: 150 },
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

export default function GameStatistics() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [existingGames, setExistingGames] = useState();

  //Load data from APIs
  useEffect(() => {
    getGames();
  }, []);

  const getGames = () => {
    return axios
      .get("https://cnsa-server.nn.r.appspot.com/cnsa/v1/games")
      .then((response) => {
        setExistingGames(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div style={{ height: 400, width: 1000 }}>
        <DataGrid
          getRowId={(existingGames) => existingGames.game_id}
          rows={existingGames}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </>
  );
}
