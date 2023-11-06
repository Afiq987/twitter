import {Popover, Transition} from "@headlessui/react";

import {useAccount} from "../../../../store/auth/hooks";

import More from "./more";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Account({user}) {

	// const profile = useSelector((state) => state.ProfileReducer.profile);
	
	const [activeUser, setActiveUser] = useState(null);
	const userId=localStorage.getItem("userId")
  
	
	const account = useAccount();
	useEffect(() => {
		fetch(
		  `https://twitterlogin-ef68a-default-rtdb.firebaseio.com/users/${userId}.json`
		)
		  .then((res) => res.json())
		  .then((data) => setActiveUser(data));
	  }, []);
  
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
	  console.log(profile);
	};
	return (
		<div className="mt-auto">
			<Popover className="relative">
				<Popover.Button
					className="my-3 lg:p-3 rounded-full hover:bg-[color:var(--background-third)] w-full flex text-left items-center transition-colors outline-none"
				>
					<img  src={`data:image/jpeg;base64,`+activeUser?.profileImg} className="w-10 flex-shrink-0 h-10 rounded-full" alt=""/>
					<div className="mx-3">
						<h6 className="font-bold leading-[1.25rem] hidden lg:block ">{activeUser?.userName}</h6>
						<div className="text-[color:var(--color-base-secondary)] hidden lg:block">
							@{activeUser?.userName}
						</div>
					</div>
					<svg viewBox="0 0 24 24" className="ml-auto h-[1.172rem]">
							<path
								fill="currentColor"
								d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
							/>
					</svg>
				</Popover.Button>
				<Transition
					enter="transition duration-200 ease-out"
					enterFrom="transform opacity-0"
					enterTo="transform opacity-100"
					leave="transition duration-200 ease-out"
					leaveFrom="transform opacity-100"
					leaveTo="transform opacity-0"
				>
					<Popover.Panel
						className="   absolute bottom-[80px]  -translate-y-2 left-[140px]  py-3 w-[300px] z-[1] lg:left-1/2 -translate-x-1/2 bg-[color:var(--background-primary)] shadow-box rounded-2xl">
						{({ close }) => (
							<More close={close} user={user}/>
						)}
					</Popover.Panel>
				</Transition>
			</Popover>
		</div>
	)
}
