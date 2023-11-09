// import React, { useEffect, useState } from "react";
// import { useAccount } from "../../store/auth/hooks";
// import { CalendarIcon } from "../home/postArea/homePostIcons";
// import { NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setProfile } from "../../store/profileReducer/ProfileReducer";

// function ProfilePic() {
//   const dispatch = useDispatch();

//   const profile = useSelector((state) => state.ProfileReducer.profile);

//   const userId = localStorage.getItem("userId");
  
//   useEffect(() => {
//     fetch(
//       `https://twitterlogin-ef68a-default-rtdb.firebaseio.com/users/${userId}.json`
//     )
//       .then((res) => res.json())
//       .then((data) => dispatch(setProfile(data)));
//   }, []);

//   const account = useAccount();

//   const profileImgChange = (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       const reader = new FileReader();

//       reader.onloadend = () => {
//         const base64String = reader.result.split(",")[1];

//         fetch(
//           `https://twitterlogin-ef68a-default-rtdb.firebaseio.com/users/${userId}.json`,
//           {
//             method: "PATCH",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               profileImg: base64String,
//             }),
//           }
//         )
//           .then((res) => res.json())
//           .then((data) => {
//             console.log("Profile image updated:", data);
//           })
//           .catch((error) => {
//             console.error("Error updating profile image:", error);
//           });
//       };

//       reader.readAsDataURL(file);
//     }
//   };
//   return (
//     <>
//       <div className="relative  top-0 z-[-10] max-w-[598px]">
//         <img
//           className="h-[250px] w-[600px]"
//           src={profile?.profileImg?`data:image/jpeg;base64,` + profile?.profileImg:
//           "https://img.wallpapersafari.com/desktop/1536/864/2/24/vQrf5b.jpg"}

//           alt=""
//         />
//         <img
//           src={
//             profile?.profileImg? `data:image/jpeg;base64,${profile?.profileImg}` :
//             "https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png"
//           }
//           className="w-[150px] absolute bottom-[-70px] border-[5px] border-black left-5 h-[150px]  rounded-full"
//           alt=""
//         />
//       </div>
//       <label className="rounded-full w-20 ms-[70%]  border px-2 py-1 font-semibold">
//         Edit Profile
//         <input
//           className=" invisible w-1 "
//           type="file"
//           onChange={profileImgChange}
//         />
//       </label>
//       <div className="absolute top-[430px] ms-2 z-[-5]">
//         <p className="text-xl font-bold">{profile?.userName}</p>
//         <p className="text-[color:var(--color-base-secondary)] ">
//           @{profile?.userName}
//         </p>
//         <p className="text-[color:var(--color-base-secondary)] flex py-3">
//           <CalendarIcon />
//           Joined November 2023
//         </p>
//         <p className="ms-1">
//           <span className="mr-4">
//             <span className="font-bold">0 </span>
//             <span className="text-[color:var(--color-base-secondary)]">
//               Following
//             </span>
//           </span>
//           <span>
//             <span className="font-bold">0 </span>
//             <span className="text-[color:var(--color-base-secondary)]">
//               Followers
//             </span>
//           </span>
//         </p>
//         <div></div>
//       </div>
//     </>
//   );
// }

// export default ProfilePic;


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../../store/profileReducer/ProfileReducer";
import { CalendarIcon } from "../home/postArea/homePostIcons";
import { useAccount } from "../../store/auth/hooks";

const DEFAULT_PROFILE_IMAGE =
  "https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg";

function ProfilePic() {
  const dispatch = useDispatch();
  const account = useAccount();
  const userId = localStorage.getItem("userId");

  const profile = useSelector((state) => state.ProfileReducer.profile);

  const fetchProfileData = () => {
    fetch(`https://twitterlogin-ef68a-default-rtdb.firebaseio.com/users/${userId}.json`)
      .then((res) => res.json())
      .then((data) => dispatch(setProfile(data)))
      .catch((error) => console.error("Error fetching profile data:", error));
  };

  const updateProfileImage = (base64String) => {
    fetch(`https://twitterlogin-ef68a-default-rtdb.firebaseio.com/users/${userId}.json`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        profileImg: base64String,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Profile image updated:", data))
      .catch((error) => console.error("Error updating profile image:", error));
  };

  const profileImgChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result.split(",")[1];
        updateProfileImage(base64String);
      };

      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <>
      {/* Profile Banner */}
      <div className="relative top-0 z-[-10] max-w-[598px]">
        <img
          className="h-[250px] w-[600px] mb-5 "
          src={profile?.profileImg ? `data:image/jpeg;base64,${profile?.profileImg}` : "https://img.wallpapersafari.com/desktop/1536/864/2/24/vQrf5b.jpg"}
          alt=""
        />
        <img
          src={profile?.profileImg ? `data:image/jpeg;base64,${profile?.profileImg}` : DEFAULT_PROFILE_IMAGE}
          className="w-[150px] absolute bottom-[-70px]  border-[5px] border-black left-5 h-[150px]  rounded-full"
          alt=""
        />
      </div>

      {/* Edit Profile Button */}
      <label className="rounded-full w-20 ms-[70%]   border px-2 py-1  font-semibold cursor-pointer">
        Edit Profile
        <input className="invisible w-1" type="file" onChange={profileImgChange} />
      </label>

      {/* User Information */}
      <div className="absolute top-[430px] ms-2 z-[-5] ">
        <p className="text-xl font-bold">{profile?.userName}</p>
        <p className="text-[color:var(--color-base-secondary)]">@{profile?.userName}</p>
        <p className="text-[color:var(--color-base-secondary)] flex py-3">
          <CalendarIcon />
          Joined November 2023
        </p>
        <p className="ms-1">
          <span className="mr-4">
            <span className="font-bold">0 </span>
            <span className="text-[color:var(--color-base-secondary)]">Following</span>
          </span>
          <span>
            <span className="font-bold">0 </span>
            <span className="text-[color:var(--color-base-secondary)]">Followers</span>
          </span>
        </p>
      </div>
    </>
  );
}

export default ProfilePic;
