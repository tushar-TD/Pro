import { createSlice } from "@reduxjs/toolkit"
const initialState = {}
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {
    loginRedux: (state, action) => {
      console.log(action)
    }
  }
})
export default userSlice.reducer;
export const { loginRedux } = userSlice.actions