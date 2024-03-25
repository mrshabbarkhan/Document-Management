import { Box, Button } from "@mui/material";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const BackBtn = ({ Location }) => {
  return (
    <Box
      sx={{
        width: "90%",
        height: "0rem",
        display: "flex",
        alignItems: "start",
        marginTop: "1rem",
        marginBottom: "2rem",
      }}
    >
      <Link to={Location}>
        <Button
          variant="contained"
          className="btnSet"
          color="warning"
          sx={{
            fontSize: "1rem",
            // backgroundColor: "black"
          }}
        >
          <FaArrowLeft />
        </Button>
      </Link>
    </Box>
  );
};

export default BackBtn;
