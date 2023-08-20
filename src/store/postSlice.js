import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../utils/axios";
import { toast } from "react-toastify";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get("/posts/all");
  return response.data.docs;
});

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (payload) => {
    // payload najmou nsmaiwha ay 7aja
    const response = await axios.post("/posts/create", payload);
    return response.data.data;
  }
);

export const fetchPostById = createAsyncThunk(
  "posts/fetchPostById",
  async (id) => {
    const response = await axios.get("/posts/" + id);
    return response.data.data;
  }
);
export const UpdatePostById = createAsyncThunk(
  "posts/UpdatePostById",
  async ({id,payload}) => {
    const response = await axios.put("/posts/" + id,payload);
    return response.data.data;
  }
);
export const DeletePostById = createAsyncThunk(
  "posts/DeletePostById",
  async (id) => {
    const response = await axios.delete("/posts/" + id);
    return response.data.data;
  }
);


const initialState = {
  posts: [],
  status: "pending",
  post: null,
  error: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    //synchronous
  },
  extraReducers: (builder) => {
    //asynchronous
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.status = "failed";
      toast.error("Error fetching posts");
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.status = "succeeded";
      toast.success("Post created successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      state.post = action.payload;
    });
    builder.addCase(createPost.rejected, (state) => {
      state.status = "failed";
      toast.error("Post creation failed");
    });
    builder.addCase(fetchPostById.fulfilled, (state, action) => {
      state.status = "succeeded";
      toast.success("post fetched succesfully!");
      state.post = action.payload;
    });

  
  },
});

//export const {} = postsSlice.actions;

export default postsSlice.reducer;
