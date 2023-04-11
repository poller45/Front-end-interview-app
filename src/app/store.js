import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { questionsSlice } from "../features/questions/qustionsSlice";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	questions: questionsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);
