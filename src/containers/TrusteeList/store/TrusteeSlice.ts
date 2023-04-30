import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTrustee } from "./TrusteeThunk";


export type Trustee = {
  discord?: string,
  info: string,
  name: string,
  linkedin?: string,
  twitter?: string,
  avatar?: string
}

type initialStateType = {
  trustee: Trustee[]
  loading: boolean;
}

const initialState: initialStateType = {
  trustee: [],
  loading: false
};


const trusteeSlice = createSlice({
  name: "trustee",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder 
      .addCase(getTrustee.pending, state => {
        // state.trustee = [],
        state.loading = true
      })
      .addCase(getTrustee.fulfilled, (state, action) => {
        state.trustee = action.payload
        state.loading = false
      })
      .addCase(getTrustee.rejected, (state) => {
        state.trustee = []
        state.loading = false
      })
  }
})

const { reducer, actions } = trusteeSlice;
// export const {onSearch, setActiveFilter, setTasksModeFilter} = actions

export default reducer;