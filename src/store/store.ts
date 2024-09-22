import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@/features/api/apiSlice";
import userReducer from "@/features/user/userSlice";

const store = configureStore({
	reducer: {
		user: userReducer,
		[apiSlice.reducerPath]: apiSlice.reducer, // An asyncron slice
	},
	// let's add the middleware needed to RTK Query
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
