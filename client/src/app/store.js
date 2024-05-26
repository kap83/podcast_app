import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../features/userSlice"
import storage from 'redux-persist/lib/storage'
// eslint-disable-next-line
import { persistReducer, persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
 } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage, 
}

const persistedReducer = persistReducer(persistConfig, userReducer)


export const store = configureStore({
    reducer: {
        user: persistedReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    // Enable Redux DevTools only in development mode
    devTools: process.env.NODE_ENV !== 'production', 
});

export const persistor = persistStore(store)

export default store