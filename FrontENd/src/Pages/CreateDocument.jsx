import { Box, Button, Card, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import BackBtn from "../Components/BackBtn";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCreateDocument } from "../feature/document/documentSlice";

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

const CreateDocument = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [photo, setphoto] = useState("");

  let formData = new FormData();
  formData.append("photo", photo);
  formData.append("title", title);
  formData.append("description", description);

  console.log(formData);
  // const formData = new FormData();
  // formData.append("title", title);
  // formData.append("description", description);
  // formData.append("photo", photo);
  // const [formData, setFormData] = useState({
  //   title: "",
  //   description: "",
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // console.log(formData);
  // useEffect(() => {
  //   dispatch(getCreateDocument());
  // }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Create Document");
    if (title && description && photo) {
      // console.log(formData);
      dispatch(getCreateDocument(formData));
      navigate("/document/allDocument");
    } else {
      // console.log("fill all details");
    }
  };

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
          <BackBtn Location={"/"} />

          <Typography
            variant="h5"
            color="gray"
            align="center"
            fontWeight={"700"}>
            Create Document
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
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default CreateDocument;
