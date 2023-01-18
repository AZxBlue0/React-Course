import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { friendsReducer } from "./reducers/friends";
import { favoritesReducer } from "./reducers/favorites";
import { profileReducer } from "./reducers/profile";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // for local storage
//import storage from "redux-persist/lib/storage/session"; session storage
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    favorites: favoritesReducer,
    friends: friendsReducer,
    profile: profileReducer,
})

const persistConfig = {
    key: 'friendsTrackerRoot',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export const persistor = persistStore(store);