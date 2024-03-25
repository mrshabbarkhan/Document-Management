import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import BackBtn from "../Components/BackBtn";
import { useDispatch, useSelector } from "react-redux";
import { getAllDocuments } from "../feature/document/documentSlice";
import { toast } from "react-toastify";
import LoadingPage from "../Components/LoadingPage";
import DocumentTableData from "../Components/DocumentTableData";

const DocumentList = () => {
  const {documents, isLoading, isSuccess, isError, message} = useSelector(((state) => state.document));

  // console.log(documents)


  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(getAllDocuments());

    if(isError ||  message) {
      toast.error(message);
    }
  },[isError, message]);

  if (isLoading) {
    return <LoadingPage />;
  }


  return (
    <Box sx={{ width: "100%", height:{
      xs: "auto",
      sm: "auto",
      md: "auto",
      lg: "auto",
      xl: 665,

    }, flexDirection: "column", paddingBottom:"1rem" , display:"flex", alignItems:"center", justifyContent:"center"}} className="display pt-5 registerSec">
      {/* <BackBtn Location={"/"} /> */}
      <BackBtn Location={"/"}/>
      <Typography variant="h3" align="center" color="gray" sx={{ paddingBlock: "1rem" }}>
        All Document Data
      </Typography>
      <Paper sx={{ width: {
         xs: 380,
         sm: "95%",
         md: "90%",
         lg: "90%",
         xl: 1400,
      },height:{
         xs: "auto",
         sm: 700,
         md: 600,
         lg: 600,
         xl: 800,
      }, overflow:{
         sm: "scroll",
         md: "scroll",
         lg: "scroll",
         xl: "scroll",
      } }} align="end">
        <TableContainer
          sx={{
            // maxHeight: 440,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "0rem",
          }}
        >
          <Table
            sx={{ width: "100%", height: "100%" }}
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead sx={{ height: "4rem", marginTop: "0rem" }}>
              <TableRow sx={{ marginTop: "2rem" }}>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: "medium",
                    fontWeight: "bold",
                    backgroundColor: "gray",
                    color: "white",
                  }}
                >
                  Sr
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: "medium",
                    fontWeight: "bold",
                    backgroundColor: "gray",
                    color: "white",
                  }}
                >
                  Title
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: "medium",
                    fontWeight: "bold",
                    backgroundColor: "gray",
                    color: "white",
                  }}
                >
                  Date
                </TableCell>
                {/* <TableCell
                  align="center"
                  sx={{
                    fontSize: "medium",
                    fontWeight: "bold",
                    backgroundColor: "gray",
                    color: "white",
                  }}
                >
                  Photo
                </TableCell> */}
                <TableCell
                  align="center"
                  sx={{
                    fontSize: "medium",
                    fontWeight: "bold",
                    backgroundColor: "gray",
                    color: "white",
                  }}
                >
                  View More
                </TableCell>
              </TableRow>
            </TableHead>
            {/* <thead>
            <tr>
              <th>Sr</th>
              <th>Product</th>
              <th>Date</th>
              <th>Status</th>
              <th>View Ticket</th>
            </tr>
          </thead> */}
            {/* <tbody>
            <tr>
              <td>1</td>
              <td>iPhpne</td>
              <td>20/Feb/2024</td>
              <td><Button variant='contained'>open</Button> </td>
              <td>
              <Link to="/ticket/1">
   <Button variant='contained' sx={{backgroundColor:"black"}}>View</Button> 
  </Link>
              </td>
            </tr>
          </tbody> */}

            <TableBody sx={{ marginTop: "5rem", paddingTop: "8rem" }}>
              {documents.map((document, index) => (
                <DocumentTableData key={document._id} index={index} document={document} />
              ))}
              {/* <DocumentTableData />
              <DocumentTableData /> */}
           
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default DocumentList;
