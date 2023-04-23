import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userInformation",
  initialState: {
    mode: "light",
    user: null,
    activation: null,
    token: null,
    posts: [],
    isLoggedIn: false,
  },
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, { payload }) => {
      state.user = payload;
      state.token = payload;
      state.isLoggedIn = true;
    },
    setActivaition: (state, { payload }) => {
      state.activation = null;
    },
    setLogout: (state, { payload }) => {
      state.token = null;
      state.isLoggedIn = false;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("kullacının arkadaşları yok");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post_id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
    setActivation: (state, { payload }) => {
      state.activation = payload;
    },
  },
});

export const userData = (state) => state.userInformation; // state üzerindeki bilgileri dışarı aktarma

export const {
  setFriends,
  setLogin,
  setLogout,
  setMode,
  setPost,
  setPosts,
  setActivation,
} = userSlice.actions; // functions dışarıya aktarılması

export default userSlice.reducer;
