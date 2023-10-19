
import Logo from "./logo/Logo";

import Menu from "../sidebar/menu";

import Account from "../sidebar/account";

export default function Sidebar({user}) {
	return (
		<aside className="w-[80px] lg:w-[275px]   max-h-screen min-h-screen px-2 flex flex-col sticky top-0">
			<Logo />
			<Menu />
			<Account user={user}/>
		</aside>
	)
}
