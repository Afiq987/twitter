import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	profile: []
}

const posted = createSlice({
	name: 'profilePhoto',
	initialState,
	reducers: {
		setProfile: (state, action) => {
			state.profile = action.payload
		}
	}
})

export const { setProfile } = profChange.actions
export default profChange.reducer
