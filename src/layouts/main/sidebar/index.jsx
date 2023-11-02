
import Logo from "./logo/Logo";

import Menu from "../sidebar/menu";

import Account from "../sidebar/account";
import { useDispatch } from "react-redux";
import { setProfile } from "../../../store/profileReducer/ProfileReducer";
import { useEffect } from "react";

export default function Sidebar({user}) {

	return (
	
<aside className="w-[80px] lg:w-[275px] sticky  max-h-screen min-h-screen px-2 flex flex-col  top-0">
			<Logo />
			<Menu />
			<Account user={user}/>
		</aside>
		
		
	)
}
