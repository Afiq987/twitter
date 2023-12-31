import React, { useEffect, useState } from 'react'
import { useAccount } from '../../store/auth/hooks';
import { useSelector } from 'react-redux';
import Posted from "../../components/post/Posted";

function MyPosts() {
    // const account = useAccount();
    const posts = useSelector((state) => state.postReducer.posts);
 //1
 const [activeUser,setActiveUser]=useState([])
//2
  const userId=localStorage.getItem("userId")

//   const profile = useSelector((state) => state.ProfileReducer.profile);
//1
useEffect(() => {
	fetch(`https://twitterlogin-ef68a-default-rtdb.firebaseio.com/users/${userId}.json`)
	  .then((res) => res.json())
	  .then((data) =>setActiveUser(data));
  }, []);
//2
	const postlar=(Object.values(activeUser?.posts!=null&&activeUser?.posts))
	console.log(postlar);

//1
useEffect(() => {
    fetch(
      `https://twitterlogin-ef68a-default-rtdb.firebaseio.com/users/${userId}.json`
    )
      .then((res) => res.json())
      .then((data) => setActiveUser(data));
  }, []);
  const account = useAccount();
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
//2
  return (
    <>
     <div className=" px-4 ">
        {[...postlar].reverse().map((item, index) => (
            <div className="flex ">
			<img
			  src={activeUser?.profileImg?`data:image/jpeg;base64,${activeUser?.profileImg}`:"https://tse1.mm.bing.net/th?id=OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd&pid=Api&P=0&h=220"}
			  className="w-10 z-[-5] flex-shrink-0 h-10 rounded-full"
			  alt=""
			/>
			<div>
			  <div className="mx-3 flex gap-2">
				<h6 className="font-bold leading-[1.25rem]">{activeUser?.userName}</h6>
				{
				  <svg
					viewBox="0 0 22 22"
					className="text-[#1d9bf0] ml-0.5 h-[1.172rem]"
				  >
					<path
					  fill="currentColor"
					  d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
					/>
				  </svg>
				}
				<div className="text-[color:var(--color-base-secondary)]">
				  @{activeUser?.userName} <span>·</span>10s
				</div>
			  </div>
			  <div className="flex-1">
				<div className="leading-5 flex items-center gap-2 mb-0.5">
				  <a
					href="#"
					className="hover:underline flex items-center font-bold"
				  ></a>
				  <div className="text-[color:var(--color-base-secondary)] flex items-center gap-1.5">
				
				  </div>
				</div>
				<Posted {...item} />
			  </div>
			</div>
		  </div>
        ))}
      </div>
	 
    </>
  )
}

export default MyPosts