import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk(
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

export const userLogout = createAsyncThunk(
  'user/userLogout',
  async() => {
    const response = await fetch('/logout', {
      method: 'DELETE'
    })

    if(!response.ok){
      throw new Error('Failed to Logout')
    }

  })

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      loading: false,
      user: null,
      error: null,
      loggedIn: false
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
          state.loggedIn = true
          state.error = null
        })
        .addCase(userLogin.rejected, (state, action) => {
          state.loading = false
          state.user = null
          state.error = action.error.message
        })
        .addCase(userLogout.fulfilled, (state) => {
          state.user = null 
          state.loggedIn = false
          console.log("success!")
        })
        .addCase(userLogout.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message
        })
    },
  });



export default userSlice.reducer


