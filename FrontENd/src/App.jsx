import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import { Box } from "@mui/material";
import DocumentList from "./Pages/DocumentList";
import CreateDocument from "./Pages/CreateDocument";
import SingleDocument from "./Pages/SingleDocument";
import PageNotFound from "./Pages/PageNotFound";
import PrivateRoutes from "./Components/PrivateRoutes";
import UpdateDocument from "./Pages/UpdateDocument";

const App = () => {
  return (
    <Router>
      {/* <NewsProvider> */}
      <Navbar />
      <Box>
        <Routes>
          <Route path="*" element={<PageNotFound/>}/>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/document" element={<PrivateRoutes/>}>
          <Route path="allDocument" element={<DocumentList />} />
          <Route path="createDocument" element={<CreateDocument />} />
          <Route path=":id" element={<SingleDocument />} />
          <Route path="update/:id" element={<UpdateDocument />} />
          </Route>

        </Routes>
      </Box>
      <ToastContainer />
      {/* </NewsProvider> */}
    </Router>
  );
};

export default App;
