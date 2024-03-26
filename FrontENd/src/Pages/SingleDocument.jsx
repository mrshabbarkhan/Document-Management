import { Box, Button, Card, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
// import image from "../assets/Img/images.jpg";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate, useParams } from "react-router-dom";
import BackBtn from "../Components/BackBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  getDeleteDocument,
  getSingleDocument,
  getUpdateDocument,
} from "../feature/document/documentSlice";
import LoadingPage from "../Components/LoadingPage";
import { toast } from "react-toastify";

const SingleDocument = () => {
  const { document, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.document
  );

  // console.log(document.photo);

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getSingleDocument(params.id));

    if (isError || message) {
      toast.error(message);
    }
  }, [isError, message]);

  // const handleDelete = () => {
  //   console.log("Delete")
  //   dispatch(getDeleteDocument(params._id));
  // }

  const handleEdit = () => {
    console.log("Update Document");
    dispatch(getUpdateDocument(document._id));
    navigate("/document/createDocument");
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!document) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Typography color="error" variant="h3">
          Data Not Found!!
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      className="pt-5 registerSec"
      sx={{
        width: "100%",
        height: {
          xs: "auto",
          sm: 650,
          md: 660,
          lg: 660,
          xl: 665,
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingBlock: "2rem",
      }}>
      <BackBtn Location={"/document/allDocument"} />

      <Typography variant="h3" color="gray" align="center" fontWeight={"700"}>
        Single Document Details
      </Typography>

      <Card
        sx={{
          width: {
            xs: 380,
            sm: "95%",
            md: "90%",
            lg: "90%",
            xl: 800,
          },
          height: {
            xs: 500,
            sm: "auto",
            md: "auto",
            lg: "auto",
            xl: "60%",
          },
          marginTop: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}>
        <Box
          align="end"
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}>
          <Link to={`/document/update/${document._id}`}>
            <Button variant="contained" color="warning">
              <EditIcon />
            </Button>
          </Link>

          {/* <Button>
          <CloseIcon />
            </Button> */}
        </Box>

        <Card
          sx={{
            width: "100%",
            height: {
              xs: 700,
              sm: 800,
              md: 300,
              lg: 800,
              xl: 800,
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "0",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
          }}>
          <Box
            sx={{
              width: {
                xs: 300,
                sm: "60%",
                md: "50%",
                lg: 800,
                xl: "70%",
              },
              height: {
                xs: 500,
                sm: "60%",
                md: "90%",
                lg: 800,
                xl: "90%",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <img
              src={
                "https://document-management-1-8aya.onrender.com/" +
                document.photo
              }
              alt="noImg"
              width="80%"
              height="90%"
            />
          </Box>
          <Box
            sx={{
              width: "60%",
              height: {
                sm: "40%",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "column",
              paddingInline: "1.5rem",
              paddingBlock: "2.5rem",
            }}
            // className="pt-5 registerSec"
          >
            <Typography variant="h4" align="center">
              Title : {document.title}
            </Typography>

            <Typography variant="h5">
              Date : {new Date(document.createdAt).toLocaleDateString("en-In")}
            </Typography>

            <Typography variant="body1" align="center">
              Description : {document.description}
              {/* Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Et laudantium tempora at molestias autem doloribus unde
              nobis minima magnam impedit cupiditate, perferendis itaque modi
              nesciunt ducimus, labore sapiente. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Reprehenderit, aut?{" "} */}
            </Typography>
          </Box>
        </Card>
      </Card>
    </Box>
  );
};

export default SingleDocument;
