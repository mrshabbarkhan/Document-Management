import {
  Box,
  Button,
  Card,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import LoginLogo from "../assets/Img/loginLogo.png";
import { loginUser } from "../feature/Auth/authSlice";
import BackBtn from "../Components/BackBtn";

const LoginPage = () => {
  const { user, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Login SuccessFully");
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/");
    }
    if (isError && message) {
      toast.error(message);
      toast.error(message, {
        position: "bottom-top",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  }, [user, isSuccess, isError, message]);

  if (isLoading) {
    return (
      <Box
        className="loading"
        sx={{
          display: "flex",
          width: "100%",
          height: "90vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3">
          <CircularProgress color="warning" />
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      className="pt-5 registerSec"
      sx={{
        width: "100%",
        height: "91.1vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: {
            xs: 300,
            sm: 500,
            md: 500,
            lg: 550,
            xl: 600,
          },
          height: "60%",
          paddingBlock: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
         <BackBtn Location={"/"}/>
        <Box
          sx={{
            width: "15%",
            height: "15%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "",
          }}
        >
          <img
            src={LoginLogo}
            alt=""
            style={{ width: "80%", height: "auto" }}
          />
        </Box>
        <Typography variant="h5" color="gray" align="center" fontWeight={"700"}>
          Login
        </Typography>
        <Box
          sx={{
            width: "80%",
            height: "70%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            placeholder="Email"
            required
            fullWidth
            onChange={handleChange}
            value={email}
            name="email"
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            placeholder="Password"
            required
            fullWidth
            onChange={handleChange}
            value={password}
            name="password"
          />
          <Button
            variant="contained"
            color="warning"
            fullWidth
            sx={{ paddingBlock: ".6rem" }}
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default LoginPage;
