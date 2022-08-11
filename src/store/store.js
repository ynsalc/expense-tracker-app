import { configureStore } from "@reduxjs/toolkit";
import auth from "store/auth";

const store = configureStore({
  reducer: {
    auth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
