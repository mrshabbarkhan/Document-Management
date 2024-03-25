import { Button, TableCell, TableRow } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { getDeleteDocument } from "../feature/document/documentSlice";

const DocumentTableData = ({ document, index }) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    console.log("Delete")
    dispatch( getDeleteDocument(document._id));
  }

  return (
    <>
      <TableRow>
        <TableCell align="center" sx={{ fontSize: "1.6rem" }}>
          {index + 1}
        </TableCell>
        <TableCell align="center" sx={{ fontSize: "1.6rem" }}>
          {/* iPhone */}
          {document.title}
        </TableCell>
        <TableCell align="center" sx={{ fontSize: "1.3rem", width: "30%" }}>
          {new Date(document.createdAt).toLocaleDateString("en-In")}
          {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quisquam fuga reprehenderit minima necessitatibus totam tempore dicta unde, cum iusto? */}
          {/* 7/Feb/2024 */}
          {/* {new Date(ticket.createdAt).toLocaleDateString("en-IN")} */}
        </TableCell>
        {/* <TableCell align="center" sx={{ fontSize: "1.6rem" }}> */}
        {/* {
                ticket.status === 'open' ? <Button variant="contained" color="primary" sx={{marginLeft:"1rem"}}>{ticket.status}</Button> : ticket.status === 'new'? <Button variant="contained" color="success" sx={{marginLeft:"1rem"}}>{ticket.status}</Button> : <Button variant="contained" color="error" sx={{marginLeft:"1rem"}}>{ticket.status}</Button>
              } */}
        {/* <img src={image} alt="" /> */}
        {/* </TableCell> */}
        <TableCell align="center" sx={{ fontSize: "1.6rem" }}>
          <Link to={`/document/${document._id}`}>
            <Button
              variant="contained"
              color="warning"
              sx={{ borderRadius: "0" }}
            >
              View
            </Button>
            
            {/* <Button variant="contained" color="error" sx={{borderRadius:"0"}}>
              Remove
            </Button> */}
          </Link>
          <Button onClick={handleDelete}>
          <CloseIcon />
            </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default DocumentTableData;
