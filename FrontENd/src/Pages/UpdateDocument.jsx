import { Box, Button, Card, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import BackBtn from "../Components/BackBtn";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleDocument, getUpdateDocument } from "../feature/document/documentSlice";

// const VisuallyHiddenInput = styled("input")({
//   clip: "rect(0 0 0 0)",
//   clipPath: "inset(50%)",
//   height: 1,
//   overflow: "hidden",
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   whiteSpace: "nowrap",
//   width: 1,
// });

const  UpdateDocument = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const params = useParams();

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [photo, setphoto] = useState("");
  const [photovalue, setphotovalue] = useState("");
  const {id} = useParams();
  const [imagepreview, setimagepreview] = useState("")

  let formData = new FormData();
  formData.append("photo", photo || photovalue);
  formData.append("title", title);
  formData.append("description", description);

  console.log(formData);
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (title && description) {
      const response = await dispatch(getUpdateDocument(id, formData));
      // console.log(response.data)
      // navigate("/document/allDocument");
    } else {
      console.log("notrun");
    }
  };

  const documentData = async() => {
    // dispatch(getSingleDocument());
    // console.log(response)
    const response = await dispatch(getSingleDocument(id));
    console.log(response)
    settitle(response.payload.title);
    setdescription(response.payload.description);
    setphotovalue(response.payload.photo);
  }
  console.log(photovalue,"doc")


  useEffect(()=>{
    documentData();
  },[id])

  useEffect(()=>{
    if(photo){
      setphoto("")
      setimagepreview(URL.createObjectURL(photo))
    }
  },[photo])
  return (
    <>
      <Box
        className="pt-5 registerSec"
        sx={{
          width: "100%",
          height: {
            xs: 600,
            sm: 665,
            md: 665,
            lg: 700,
            xl: 665,
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}>
        <Card
          sx={{
            width: {
              xs: 380,
              sm: "70%",
              md: "50%",
              lg: "50%",
              xl:"35%",
            },
            height: {
              xs: 500,
              sm: "60%",
              md: "70%",
              lg: "70%",
              xl: "70%",
            },
            paddingBlock: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
          }}>
          <BackBtn Location={`/document/allDocument`}/>

          <Typography
            variant="h5"
            color="gray"
            align="center"
            fontWeight={"700"}>
            Update Document
          </Typography>
          <Box
            sx={{
              width: "80%",
              height: "88%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "column",
            }}>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              placeholder="Title Here"
              fullWidth
              required
              onChange={(e) => settitle(e.target.value)}
              value={title}
            />
            <TextField
              id="outlined-basics"
              label="Description"
              variant="outlined"
              placeholder="Description Here"
              required
              fullWidth
              onChange={(e) => setdescription(e.target.value)}
              value={description}
            />
            {/* <TextField
            id="outlined-basic" */}
            {/* label="Upload Image"
            variant="outlined"
            placeholder="Upload Image"
            required
            fullWidth
            type='file' */}
            {/* // onChange={handleChange}
            // value={password}
            // name="password" */}
            {/* /> */}

            <Button
              color="warning"
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon 
              type="file"
              accept="image/*"
              // value={formData.photo}
              onChange={(e) => setphoto(e.target.files[0])}
              />}>
              <input
                type="file"
                id="uploadInput"
                // value={formData.photo}
                accept="image/*"
                onChange={(e) => setphoto(e.target.files[0])}
              />
            </Button>

            
            <Button
              variant="contained"
              color="warning"
              fullWidth
              sx={{ paddingBlock: ".6rem" }}
              type="submit"
              onClick={handleSubmit}>
              Create Document
            </Button>

            {/* <img width="50%" height="50%" src={imagepreview?imagepreview: ("http://localhost:3000/"  + photovalue )} alt="no" /> */}
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default UpdateDocument;
