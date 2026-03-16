import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos";
import loadingReducer from "../features/features/loading";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
