import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { rootReducer, reducers } from "./reducers";
import { api } from "./api";

import type {
  ThunkAction,
  Action,
  PayloadAction,
  PreloadedState,
  StateFromReducersMapObject,
} from "@reduxjs/toolkit";
import type { HYDRATE, Context } from "next-redux-wrapper";

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export type HydrateAction = PayloadAction<AppState, typeof HYDRATE>;
export type RootState = StateFromReducersMapObject<typeof reducers>;

const reducerKeys = Object.keys(reducers);

export const makeStore = (
  props?: Context | Partial<PreloadedState<RootState>>
) => {
  const preloadedState: Partial<RootState> = Object.fromEntries(
    Object.entries(props || {}).filter(([k]) => reducerKeys.includes(k))
  );

  return configureStore({
    preloadedState,
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => {
      const appContextHeaders =
        props && "ctx" in props ? props.ctx.req?.headers ?? {} : {};
      const getServerSideHeaders =
        props && "req" in props ? props.req?.headers ?? {} : {};

      const ssrHeaders = {
        ...appContextHeaders,
        ...getServerSideHeaders,
      };

      return getDefaultMiddleware({
        thunk: {
          extraArgument: { ssrHeaders },
        },
      }).concat(api.middleware);
    },
  });
};

export const wrapper = createWrapper(makeStore);
