
import {useAccount, useAccounts} from "../../../../../store/auth/hooks";
import classNames from "classnames";

import {setCurrentAccount} from "../../../../../store/auth/actions";
import { Link } from "react-router-dom";
import Login from "../../../../../components/login/Login";
import { useEffect, useState } from "react";

export default function More({ close,user,signIn }) {

	const currentAccount = useAccount()
	const accounts = useAccounts()
	const signOut=()=>{
	  localStorage.setItem("user",false)
	  window.location.reload()
	}
	const [activeUser, setActiveUser] = useState(null);
	const userId=localStorage.getItem("userId")
  
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
	  console.log(activeUser);
	};

	return (
		<>
			{accounts.map(account => (
				<button
					type="button"
					disabled={currentAccount.id === account.id}
					onClick={() => {
						setCurrentAccount(account)
						close()
					}}
					className={classNames("py-3 px-4 flex items-center text-left w-full transition-colors", {
						"hover:bg-[color:var(--background-secondary)]": currentAccount.id !== account.id
					})}
				>
				
					<img src={`data:image/jpeg;base64,`+activeUser?.profileImg} className="w-10 h-10 rounded-full" alt=""/>
					<div className="mx-3 flex-1">
						<h6 className="font-bold leading-[1.25rem]">{activeUser?.userName}</h6>
						<div className="text-[color:var(--color-base-secondary)] ">
							@{activeUser?.userName}
						</div>
					</div>
					{currentAccount.id === account.id && (
						<svg viewBox="0 0 24 24" className="mr-2 ml-3 h-[1.172rem]" fill="#00ba7c">
							<path
								d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"
							/>
						</svg>
					)}
				</button>
			))}
			<div className="h-px bg-[color:var(--background-third)] my-3"/>
			<Link to="/login"><button 
				className="py-3 px-4 text-left transition-colors hover:bg-[color:var(--background-secondary)] w-full font-bold leading-[1.25rem]" >
				Add an existing account
			</button>
			</Link> 
		
			
			<button
			onClick={signOut}
				className="py-3 px-4 text-left transition-colors hover:bg-[color:var(--background-secondary)] w-full font-bold leading-[1.25rem]">
				<div className="max-w-[228px]">
				Log out@{activeUser?.userName}
				</div>
			</button>
		
		</>
	)
}
