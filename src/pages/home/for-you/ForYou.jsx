// import Post from "../../../components/post";
// import { WVList } from "virtua";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   EmojiIcon,
//   GalleryIcon,
//   GifIcon,
//   PlaceIcon,
//   PollIcon,
//   ScheduleIcon,
// } from "../postArea/homePostIcons";

// import { useAccount } from "../../../store/auth/hooks";

// export default function ForYou() {
//   const dispatch = useDispatch();
 
 
//   const posts = useSelector((state) => state.postReducer.posts);
//   const profilePic = useSelector((state) => state.ProfileReducer.profile);
//   const [value, setValue] = useState("");
//   const [img, setImg] = useState("");
//   const account = useAccount();

 
// const userId =localStorage.getItem("userId");

//   const post = async () => {
//     const response = await fetch(
//       `https://twitterlogin-ef68a-default-rtdb.firebaseio.com/users/${userId}/posts.json`,
//       {
//         method: "POST", // or 'PUT'
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ img, value }),
//       }
//     );
//   };



//   const handleFileChange = (event) => {
    
//     const file = event.target.files[0];

//     if (file) {
//       const reader = new FileReader();

//       reader.onloadend = () => {
//         const base64String = reader.result.split(",")[1];
//         setImg(base64String);
//       };

//       reader.readAsDataURL(file);
//     }
//   };
//   return (
//     <div className="for-you flex flex-wrap mt-[10px] ">
//       <div className="flex border-b w-full border-[color:var(--background-third)]">
//         <div className="flex space-x-4 px-4 py-3 ">
//           <img
//             src={`data:image/jpeg;base64,` + profilePic?.profileImg}
//             alt="profileFoto"
//             className="w-10 h-10 rounded-full"
//           />
//         </div>
//         <div className="flex flex-col flex-1 mt-2 p-2">
//           <textarea
//             className="w-full text-xl placeholder-gray-light outline-none overflow-hidden resize-none bg-transparent"
//             placeholder="What is happening?!"
//             onChange={(e) => setValue(e.target.value)}
//             value={value}
//           ></textarea>
//           <div className=" flex items-center justify-between">
//             <div className="flex      items-center justify-center -ml-3 ">
//               <div className="w-10 h-10 flex items-center justify-center   rounded-full transition-all duration-200">
//                 <GalleryIcon />
//                 <input
//                   id="fileInput"
//                   className="w-10 h-10 opacity-0 absolute"
//                   type="file"
//                   multiple
//                   onChange={handleFileChange}
//                 />
//               </div>
//               <div className="w-10 h-10 flex items-center justify-center    rounded-full transition-all duration-200">
//                 <GifIcon />
//               </div>
//               <div className="w-10 h-10 flex items-center justify-center   text-white   rounded-full transition-colors duration-200">
//                 <PollIcon />
//               </div>
//               <div className="w-10 h-10 flex items-center justify-center   text-white rounded-full  transition-colors duration-200">
//                 <EmojiIcon />
//               </div>
//               <div className="w-10 h-10 flex items-center justify-center   text-white rounded-full  transition-colors duration-200">
//                 <ScheduleIcon />
//               </div>
//               <div className="w-10 h-10 flex items-center justify-center   text-white rounded-full  transition-colors duration-200">
//                 <PlaceIcon />
//               </div>
//             </div>
//             <button
//               className="bg-[color:var(--color-primary)]  hover:opacity-90 text-white rounded-full px-4 py-2"
//               onClick={post}
//             >
//               Post
//             </button>
//           </div>
//         </div>
//       </div>

//       <WVList>
//         {[...posts].reverse().map((post, key) => (
//           <Post {...post} key={key} />
//         ))}
//       </WVList>
     
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EmojiIcon, GalleryIcon, GifIcon, PlaceIcon, PollIcon, ScheduleIcon } from "../postArea/homePostIcons";
import { useAccount } from "../../../store/auth/hooks";
import Post from "../../../components/post";
import { WVList } from "virtua";

export default function ForYou() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer.posts);
  // const profilePic = useSelector((state) => state.ProfileReducer.profile);
  const [value, setValue] = useState("");
  const [img, setImg] = useState("");
  const account = useAccount();
  const userId = localStorage.getItem("userId");

  const post = async () => {
    try {
      const response = await fetch(
        `https://twitterlogin-ef68a-default-rtdb.firebaseio.com/users/${userId}/posts.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ img, value }),
        }
      );

      // Handle response if needed
      console.log("Post response:", response);
    } catch (error) {
      console.error("Error posting:", error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result.split(",")[1];
        setImg(base64String);
      };

      reader.readAsDataURL(file);
    }
  };


  const [activeUser, setActiveUser] = useState(null);
  // const userId=localStorage.getItem("userId")

  useEffect(() => {
    fetch(
      `https://twitterlogin-ef68a-default-rtdb.firebaseio.com/users/${userId}.json`
    )
      .then((res) => res.json())
      .then((data) => setActiveUser(data));
  }, []);
  // const account = useAccount();


  const profileImgChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result.split(",")[1];

        fetch(
          `https://twitterlogin-ef68a-default-rtdb.firebaseio.com/users/${userId}.json`,
          {
            method: 'PATCH', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              profileImg: base64String,
            }),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log('Profile image updated:', data);
            
          })
          .catch((error) => {
            console.error('Error updating profile image:', error);
          });
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="for-you flex flex-wrap mt-[10px] ">
      <div className="flex border-b w-full border-[color:var(--background-third)]">
        <div className="flex space-x-4 px-4 py-3 ">
          <img
            src={`data:image/jpeg;base64,${activeUser?.profileImg}`}
            alt="profileFoto"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="flex flex-col flex-1 mt-2 p-2">
          <textarea
            className="w-full text-xl placeholder-gray-light outline-none overflow-hidden resize-none bg-transparent"
            placeholder="What is happening?!"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          ></textarea>
          <div className=" flex items-center justify-between">
            <div className="flex items-center justify-center -ml-3 ">
              <div className="w-10 h-10 flex items-center justify-center   rounded-full transition-all duration-200">
                <GalleryIcon />
                <input
                  id="fileInput"
                  className="w-10 h-10 opacity-0 absolute"
                  type="file"
                  multiple
                  onChange={handleFileChange}
                />
              </div>
              <div className="w-10 h-10 flex items-center justify-center    rounded-full transition-all duration-200">
              <GifIcon />
            </div>
            <div className="w-10 h-10 flex items-center justify-center   text-white   rounded-full transition-colors duration-200">
              <PollIcon />
            </div>
            <div className="w-10 h-10 flex items-center justify-center   text-white rounded-full  transition-colors duration-200">
              <EmojiIcon />
            </div>
            <div className="w-10 h-10 flex items-center justify-center   text-white rounded-full  transition-colors duration-200">
              <ScheduleIcon />
            </div>
            <div className="w-10 h-10 flex items-center justify-center   text-white rounded-full  transition-colors duration-200">
              <PlaceIcon />
            </div>
          </div>
           
            <button
              className="bg-[color:var(--color-primary)]  hover:opacity-90 text-white rounded-full px-4 py-2"
              onClick={post}
            >
              Post
            </button>
          </div>
        </div>
      </div>

      <WVList>
        {[...posts].reverse().map((post, key) => (
          <Post {...post} key={key} />
        ))}
      </WVList>
    </div>
  );
}
