import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTrustee } from "./TrusteeThunk";


export type Trustee = {
  discord?: string,
  info: string,
  name: string,
  linkedin: string
  avatar: string
}

type initialStateType = {
  trustee: Trustee[]
}

const initialState: initialStateType = {
  trustee: []
};


const trusteeSlice = createSlice({
  name: "trustee",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder 
      .addCase(getTrustee.pending, state => {state.trustee = []})
      .addCase(getTrustee.fulfilled, (state, action) => {state.trustee = action.payload})
      .addCase(getTrustee.rejected, (state) => {state.trustee = []})
  }
})

const { reducer, actions } = trusteeSlice;
// export const {onSearch, setActiveFilter, setTasksModeFilter} = actions

export default reducer;