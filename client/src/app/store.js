//a container for js apps
//stores the whole state of the app in an immutatable obj tree

import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../features/userSlice"


export const store = configureStore ({
    reducer: {
        user: userReducer
    },
})

console.log(store)