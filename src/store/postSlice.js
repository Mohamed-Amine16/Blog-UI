import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../utils/axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get("posts/all");
  return response.data.docs;
});

const initialState = {
  posts: [],
  status: "pending",
};


export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
       state.status="succeeded";
       state.posts = action.payload;
      })
}});

// Action creators are generated for each case reducer function
export const {} = postsSlice.actions;

export default postsSlice.reducer;
