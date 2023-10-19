import StickyHeader from "../../components/sticky-header";
import Header from "./Header";

import {useAccount} from "../../store/auth/hooks";
import Posted from "../../components/post/Posted";

export default function Profile() {

	const account = useAccount()

	return (
		<>
<Header/>
		<div className="absolute top-0 max-w-[598px]">
			
			<img className="h-[250px] w-[600px]" src="https://wallpaperfx.com/view_image/beautiful-nature-1024x600-wallpaper-4691.jpg" alt="" />
			<img src={account.avatar} className="w-[150px] absolute bottom-[-70px] border-[5px] border-black left-5 h-[150px]  rounded-full" alt=""/>
		</div>
		<div className="">
		<p>{account.fullName}</p>
		</div>
		<div className="z-10 absolute top-[500px]">
		<Posted />
		</div>
		
		</>
		
	
			
		
			
			
		
	)
}
