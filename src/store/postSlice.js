import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      title: "First post",
      content: "First post content!",
      description: "First post description!",
      published: true,
      createdAt: new Date(),
    },
    {
      title: "Second post",
      content: "Second post content!",
      description: "Second post description!",
      published: false,
      createdAt: new Date(),
    },
    {
      title: "Third post",
      content: "Third post content!",
      description: "Third post description!",
      published: true,
      createdAt: new Date(),
    },
  ],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = postsSlice.actions;

export default postsSlice.reducer;
