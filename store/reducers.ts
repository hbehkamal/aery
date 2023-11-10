import { combineReducers } from "@reduxjs/toolkit";

import { api } from "./api";

export const reducers = {
  [api.reducerPath]: api.reducer,
};

export type RootReducerKeys = keyof typeof reducers;
export const rootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>;
