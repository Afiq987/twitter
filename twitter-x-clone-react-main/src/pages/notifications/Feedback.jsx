import React from 'react'
import { useSelector } from 'react-redux'

function Feedback() {
    // const feeds = [
    //     {
    //       pic:"https://pbs.twimg.com/profile_images/1679280018516484097/dZdWxpH0_400x400.jpg",
    //       name:"only hands of rdj",
    //       feedBack:"only hands of rdj 4x😍😍😍😍 https://pic.twitter.com/7YnuVO3amA"
    //     },
    //     {
    //       pic:"https://pbs.twimg.com/profile_images/1629111730004537345/qsdsH-pf_400x400.jpg",
    //       name:"AZTV",
    //       feedBack:"Qarabağda qanunsuz silahlı birləşmələr yaradaraq onların fəaliyyətini təşkil edən şəxslər həbs edilib https://pic.twitter.com/ZL6Mmye93J"
    //     },
    //     {
    //       pic:"https://pbs.twimg.com/profile_images/1543205510731763713/E2aefIPb_400x400.jpg",
    //       name:"Fulya Öztürk",
    //       feedBack:"Karabağ Azerbaycandır. Allah askerlerimizi muzaffer eylesin!🇦🇿"
    //     },
    
    //   ]


     const feeds= useSelector(state => state.feed);

  return (
    <div>
  {
    feeds.map((item)=>
      <div className="border border-gray-800 border-x-0 border-t-0">
        <div className="flex gap-3">
          <svg viewBox="0 0 24 24" className="h-8 ">
          <path d="M22.99 11.295l-6.986-2.13-.877-.326-.325-.88L12.67.975c-.092-.303-.372-.51-.688-.51-.316 0-.596.207-.688.51l-2.392 7.84-1.774.657-6.148 1.82c-.306.092-.515.372-.515.69 0 .32.21.6.515.69l7.956 2.358 2.356 7.956c.09.306.37.515.69.515.32 0 .6-.21.69-.514l1.822-6.15.656-1.773 7.84-2.392c.303-.09.51-.37.51-.687 0-.316-.207-.596-.51-.688z" fill="#794BC4"></path>
          </svg>
        <img className="h-8 rounded-full" src={item.pic} alt="" />
        </div>
       <div className="px-11 py-4">
       <h2 className="font-bold">{item.name}</h2>
        <p className="text-gray-500 py-3">{item.feedBack}</p>
       </div>
        
      </div>
    )
  }
</div>
  )
}

export default Feedback