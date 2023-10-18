import {createSlice} from "@reduxjs/toolkit";

const initialState= [
  {
    pic:"https://pbs.twimg.com/profile_images/1679280018516484097/dZdWxpH0_400x400.jpg",
    name:"only hands of rdj",
    feedBack:"only hands of rdj 4x😍😍😍😍 https://pic.twitter.com/7YnuVO3amA"
  },
  {
    pic:"https://pbs.twimg.com/profile_images/1629111730004537345/qsdsH-pf_400x400.jpg",
    name:"AZTV",
    feedBack:"Qarabağda qanunsuz silahlı birləşmələr yaradaraq onların fəaliyyətini təşkil edən şəxslər həbs edilib https://pic.twitter.com/ZL6Mmye93J"
  },
  {
    pic:"https://pbs.twimg.com/profile_images/1543205510731763713/E2aefIPb_400x400.jpg",
    name:"Fulya Öztürk",
    feedBack:"Karabağ Azerbaycandır. Allah askerlerimizi muzaffer eylesin!🇦🇿"
  }
]

const feeds = createSlice({
	name: 'feeds',
	initialState

})

export const { actions } = feeds;
export default feeds.reducer;
