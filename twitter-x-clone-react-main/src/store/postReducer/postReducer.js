import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	posts: []
}

const posted = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setPosts: (state, action) => {
			state.posts = action.payload
		}
	}
})

export const { setPosts } = posted.actions
export default posted.reducer
