import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@/features/api/apiSlice";
import counterReducer from "@/features/counter/counterSlice";

const store = configureStore({
	reducer: {
		counter: counterReducer, // A syncron slice
		[apiSlice.reducerPath]: apiSlice.reducer, // An asyncron slice
	},
	// let's add the middleware needed to RTK Query
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
