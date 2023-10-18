
import {useAccount, useAccounts} from "../../../../../store/auth/hooks";
import classNames from "classnames";

import {setCurrentAccount} from "../../../../../store/auth/actions";
import { Link } from "react-router-dom";
import Login from "../../../../../components/login/Login";
import { useState } from "react";

export default function More({ close,user,signIn }) {

	const currentAccount = useAccount()
	const accounts = useAccounts()
	const signOut=()=>{
	  localStorage.setItem("user",false)
	  window.location.reload()
	}


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
					<img src={account.avatar} className="w-10 h-10 rounded-full" alt=""/>
					<div className="mx-3 flex-1">
						<h6 className="font-bold leading-[1.25rem]">{account.fullName}</h6>
						<div className="text-[color:var(--color-base-secondary)] ">
							@{account.username}
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
				className="py-3 px-4 text-left transition-colors hover:bg-[color:var(--background-secondary)] w-full font-bold leading-[1.25rem]">
				Manage accounts
			</button>
			<button
			onClick={signOut}
				className="py-3 px-4 text-left transition-colors hover:bg-[color:var(--background-secondary)] w-full font-bold leading-[1.25rem]">
				<div className="max-w-[228px]">
				Log out@{currentAccount.username} 
				</div>
			</button>
		
		</>
	)
}
