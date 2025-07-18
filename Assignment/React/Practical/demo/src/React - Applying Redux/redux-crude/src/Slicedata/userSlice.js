import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Read
export const showuser = createAsyncThunk(
    'showuser',
    async (argu, { rejectWithValue }) => {
        try {
            const res = await axios.get("http://localhost:3000/user")
            const result = res.data
            return result
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

//Create
export const createuser = createAsyncThunk(
    'createuser',
    async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post("http://localhost:3000/user", data)
            const result = res.data
            return result
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

//Delete
export const deleteuser = createAsyncThunk(
    'deleteuser',
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios.delete(`http://localhost:3000/user/${id}`)
            const result = res.data
            return id // Return the deleted user's ID
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

//update
//update
export const updateuser = createAsyncThunk(
    'updateuser',
    async (data, { rejectWithValue }) => {
        try {
            const res = await axios.put(`http://localhost:3000/user/${data.id}`, data)
            return res.data; // Return the complete updated user object
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message)
        }
    }
)

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
        userFulfilled: (state, action) => {
            state.loading = false;
            state.user.push(action.payload);
        },
        userReject: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            //read data
            .addCase(showuser.pending, (state) => {
                state.loading = true
            })
            .addCase(showuser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
            .addCase(showuser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            //create data
            .addCase(createuser.pending, (state) => {
                state.loading = true
            })
            .addCase(createuser.fulfilled, (state, action) => {
                state.loading = false
                state.user.push(action.payload)
            })
            .addCase(createuser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            //delete User
            .addCase(deleteuser.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteuser.fulfilled, (state, action) => {
                state.loading = false
                state.user = state.user.filter((user) => user.id !== action.payload)
            })
            .addCase(deleteuser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            //updateuser
            .addCase(updateuser.pending, (state) => {
                state.loading = true
            })
            .addCase(updateuser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = state.user.map(user =>
                    user.id === action.payload.id ? action.payload : user
                );
            })
            .addCase(updateuser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    }
})

export const { userPending, userFulfilled, userReject } = userSlice.actions;

export default userSlice.reducer;