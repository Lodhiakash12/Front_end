import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "userDetails",
    initialState: {
        user: [],
        loading: false,
        error: ""
    },
    reducers: {
        userPending: (state) => {
            state.loading = true;
        },
        userFullfiled: (state, action) => {
            state.loading = false,
                state.user.push(action.payload)
        },
        userReject: (state, action) => {
            state.loading = false,
                state.error = action.payload
        }
    }

})
export const { userPending, userFullfiled, userReject } = userSlice.actions;

export default userSlice.reducer;