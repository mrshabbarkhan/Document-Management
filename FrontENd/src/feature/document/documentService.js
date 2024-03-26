import axios from "axios";

const API_URL = "https://document-management-1-8aya.onrender.com/api/document";

// Get All Documents
const getDocuments = async (token) => {
  // to send token --> create a varible name is option
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "/", option);
  return response.data;
};

// Get Single Document
const getDocument = async (id, token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "/" + id, option);
  console.log(response.data);
  return response.data;
};

// Delete Documents

const deleteDocument = async (_id, token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${API_URL}/${_id}`, option);
  console.log(response.data);
  return response.data;
};

// Create Document
const createDocument = async (formData, token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL + "/create", formData, option);
  // console.log(response);
  return response.data;
};

// update Document
const updateDocument = async (id, formData, token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(`${API_URL}/${id}`, formData, option);
  console.log(response.data);
  return response.data;
};

const documentService = {
  getDocuments,
  getDocument,
  createDocument,
  deleteDocument,
  updateDocument,
};

export default documentService;
