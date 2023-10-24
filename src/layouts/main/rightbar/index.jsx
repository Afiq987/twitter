
import Search from "../rightbar/search";

import Premium from "../rightbar/premium";


import WhoFollow from "../rightbar/who-follow";

import Footer from "../rightbar/footer";
import Topics from "./topics/Topics";

export default function RightBar() {
	return (
		<aside className="w-[350px] mr-2.5 hidden lg:block " >
			<Search />
			<Premium /> 
		<Topics/>
			<WhoFollow />
			<Footer />
		</aside>
	)
}
