import {configureStore} from "@reduxjs/toolkit";

import auth from "./auth";

import modal from "./modal";

import appearance from "./appearance";
import feed from "./feed";
import postReducer from "./postReducer/postReducer";
import ProfileReducer from "./profileReducer/ProfileReducer";

const store = configureStore({
	reducer: {
		auth,
		modal,
		appearance,
		feed,
		postReducer,
		ProfileReducer
	}
})

export default store
