import { configureStore } from "@reduxjs/toolkit";
import activeSectionProducer from "@/stores/reducers/activeSection";

export const store = configureStore({
  reducer: {
    activeSection: activeSectionProducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
