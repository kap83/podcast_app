import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userLogin=createAsyncThunk(
    'user/userLogin',
    async(userCredentials, {rejectWithValue}) => {
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(userCredentials)
            })

            if(!response.ok) {
                const errorData = await response.json()
                return rejectWithValue(errorData)

            }

            const data = await response.json()
            return data
        } catch (error) {
            return rejectWithValue(error.toString)
        }
        
    
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      loading: false,
      user: null,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(userLogin.pending, (state) => {
          state.loading = true
        })
        .addCase(userLogin.fulfilled, (state, action) => {
          state.loading = false
          state.user = action.payload
        })
        .addCase(userLogin.rejected, (state, action) => {
          state.loading = false
          state.user = null
          console.log(action.error.message)
          state.error = action.error.message
        });
    },
  });

export default userSlice.reducer


