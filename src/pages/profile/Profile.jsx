




import MyPosts from "./MyPosts";




import { NavLink, Outlet, Route, Routes } from "react-router-dom";

import PostsTab from "./PostsTab";



export default function Profile() {

  return (
    <>
   
<PostsTab/>
<div className="mt-[350px]">
<Outlet/>
</div>

     




      
       
   



    
    </>
  );
}
