import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  firstname: "",
  lastname: "",
  email: "",
  profilepic: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      console.log(action.payload.data);

      // Perform null or undefined check on action.payload.data
      if (action.payload.data) {
        state._id = action.payload.data._id;
        state.firstname = action.payload.data.firstname;
        state.lastname = action.payload.data.lastname;
        state.email = action.payload.data.email;
        state.profilepic = action.payload.data.profilepic;
      }
    },
    logoutRedux: (state, action) => {
      state._id = "";
      state.firstname = "";
      state.lastname = "";
      state.email = "";
      state.profilepic = "";
    }
  },
});

export const { loginRedux, logoutRedux } = userSlice.actions;
export default userSlice.reducer;
