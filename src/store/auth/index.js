// Import necessary libraries and dependencies
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
	currentAccount: {	
		id: 1,
		username: 'Afiq_Hasanov87',
		fullName: 'Afiq Hasanov (Aydın)',
		avatar: 'https://pbs.twimg.com/profile_images/1706362039935938560/_epNszdP_400x400.jpg'
	},
  accounts: [
    {
      id: 1,
      username: 'Afiq_Hasanov87',
      fullName: 'Afiq Hasanov (Aydın)',
      avatar: 'https://pbs.twimg.com/profile_images/1706362039935938560/_epNszdP_400x400.jpg',
    },
  
  ],
};

// Create the auth slice
const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // State manipulation methods
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(account => account?.id !== action.payload);
      if (state.currentAccount && action.payload === state.currentAccount?.id) {
        state.currentAccount = null;
        localStorage.removeItem('currentAccount'); // Remove from local storage
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
      localStorage.setItem('currentAccount', JSON.stringify(action.payload)); // Save to local storage
    },
  },
});

// Export necessary actions and the reducer
export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions;
export default auth.reducer;
