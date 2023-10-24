import StickyHeader from "../../components/sticky-header";
import Search from "../../layouts/main/rightbar/search";
import { BackwardIcon, DotsIcon, MoreIcon, NewListIcon } from "../home/postArea/homePostIcons";

export default function Lists() {
	return (
		<>
			<header
			className="sticky flex items-center  border-b border-[color:var(--background-third)] top-0 z-10 bg-[color:var(--background-primary-alpha)] backdrop-blur-md"
		>
				<div className="px-4">
				<BackwardIcon />
				</div>
				<div className="px-4 pt-1 w-[80%]">
				<Search />
				</div>
			
			<NewListIcon/>
		
			<div className="px-4">
			<DotsIcon/>
				
			</div>
				</header>
			
		</>
	)
}

