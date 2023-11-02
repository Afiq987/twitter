import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
	profile: []
}

export const posted = createSlice({
	name: 'profilePhoto',
	initialState,
	reducers: {
		setProfile: (state, action) => {
			state.profile = action.payload
		}
	}
})

export const { setProfile } = posted.actions
export default posted.reducer
