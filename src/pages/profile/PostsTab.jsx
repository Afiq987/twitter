import React from 'react'

import { NavLink, Outlet } from 'react-router-dom'
import Header from './Header'
import ProfilePic from './ProfilePic'

function PostsTab() {
  return (
    <div>
        <Header/>
        <ProfilePic/>
     <div className="flex  absolute top-[580px] justify-around">
    <NavLink to="/Afiq_Hasanov87"><button className="px-9 py-3  hover:bg-gray-500/25">Posts</button></NavLink>
    <NavLink to="replies"><button className="px-9 py-3  hover:bg-gray-500/25">Replies</button></NavLink>
   
    <NavLink to="/Afiq_Hasanov87"><button className="px-10 py-3  hover:bg-gray-500/25">Highlights</button></NavLink>
    <NavLink to="/Afiq_Hasanov87"><button className="px-10 py-3  hover:bg-gray-500/25">Media</button></NavLink>
    <NavLink to="/Afiq_Hasanov87"><button className="px-9 py-3  hover:bg-gray-500/25">Likes</button></NavLink>
  
   </div>
   <>
   
   </>
       
    </div>
  )
}

export default PostsTab