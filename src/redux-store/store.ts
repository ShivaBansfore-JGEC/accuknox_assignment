import { configureStore } from "@reduxjs/toolkit";
import DashboardSlice from "./slice/DashboardSlice";

export const store = configureStore({
    reducer: {
        dashboard: DashboardSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch