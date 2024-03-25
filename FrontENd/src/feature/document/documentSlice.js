import documentService from "./documentService";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  document: {},
  documents: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
  //   removeFromState : (state, action) => {
  //     return{
  //         ...state,
  //         document : state.document.filter(todo => todo._id !== action.payload)
  //     }
  // },
 
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllDocuments.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        // state.document = null;
        // state.documents = [];
        state.message = "";
      })
      .addCase(getAllDocuments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        // state.document = null;
        state.documents = action.payload;
        state.message = "";
      })
      .addCase(getAllDocuments.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        // state.document = null;
        // state.documents = [];
        state.message = action.payload;
      })

      .addCase(getSingleDocument.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(getSingleDocument.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.document = action.payload;
        state.message = "";
      })
      .addCase(getSingleDocument.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getCreateDocument.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(getCreateDocument.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.document = action.payload;
        // state.documents = action.payload;
        state.message = "";
      })
      .addCase(getCreateDocument.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getDeleteDocument.pending, (state, action) => {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
        state.message = ""
      })
      .addCase(getDeleteDocument.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.document = action.payload
        state.message = ""
      })
      .addCase(getDeleteDocument.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
      })


      .addCase(getUpdateDocument.pending, (state, action) => {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
        state.message = ""
      })
      .addCase(getUpdateDocument.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.document = action.payload
        state.message = ""
      })
      .addCase(getUpdateDocument.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
      })
  },
});

// Get All Document

export const getAllDocuments = createAsyncThunk(
  "GET_DOCUMENTS",
  async (_, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.user.token;
      return await documentService.getDocuments(token);
    } catch (error) {
      // const message = error.response.data.message;
      const message = response.data.error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get Single Document

export const getSingleDocument = createAsyncThunk(
  "GET/SINGLEDOCUMENT",
  async (id, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.user.token;
      return await documentService.getDocument(id, token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Create Document

export const getCreateDocument = createAsyncThunk(
  "CREATE/DOCUMENT",
  async (formData, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.user.token;
      return await documentService.createDocument(formData, token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete Document

export const getDeleteDocument = createAsyncThunk("DELETE/DOCUMENT", async(id, thunkAPI) => {
  try {
    const token = await thunkAPI.getState().auth.user.token;
    return await documentService.deleteDocument(id , token)

  } catch (error) {
    // const message = error.response.data.message;
    // return thunkAPI.rejectWithValue(message)
    console.log("Show error")
  }
})


export const getUpdateDocument = createAsyncThunk("UPDATE/DOCUMENT", async(id, formData, thunkAPI)=>{
    try {
      const token = await thunkAPI.getState().auth.user.token;
      return await documentService.updateDocument(id,formData,token)
  
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message)
    }
  })

// export const {editInState} = documentSlice.actions;

export default documentSlice.reducer;
