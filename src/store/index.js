import {configureStore} from "@reduxjs/toolkit";

import auth from "./auth";

import modal from "./modal";

import appearance from "./appearance";
import feed from "./feed";
import postReducer from "./postReducer/postReducer";

const store = configureStore({
	reducer: {
		auth,
		modal,
		appearance,
		feed,
		postReducer
	}
})

export default store
