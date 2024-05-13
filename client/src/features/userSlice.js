import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userLogin=createAsyncThunk(
    'user/userLogin',
    async(userCredentials) => {
        const request = fetch('/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userCredentials)
        }).then((res) => {
            if(res.ok) {
                return res.json().then((data) => {
                    console.log(data)
                })
            } else {
                return res.json().then((data) => {
                    console.log(data)
                })
            }
        })
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        user: null,
        error: null
    },
    reducers: {}
})

export default userSlice.reducer