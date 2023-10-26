import { Link } from "react-router-dom";
import StickyHeader from "../../components/sticky-header";
import Search from "../../layouts/main/rightbar/search";
import { BackwardIcon, DotsIcon, MoreIcon, NewListIcon, PlusIcon, SearchIcon } from "../home/postArea/homePostIcons";
import { useState } from "react";

export default function Lists() {
	
	const groups = [
		{
			name:'Breaking News',
			profilePhoto:'https://pbs.twimg.com/media/EXZ3BXhUwAEFNBE?format=png&name=240x240',
			followerCount:813,
			members:23
		},
		{
			name:'Azerbaijan',
			profilePhoto:'https://pbs.twimg.com/list_banner_img/1322321870360768513/6wQlu6_7?format=jpg&name=240x240',
			followerCount:184,
			members:50
		},
		{
			name:'International News',
			profilePhoto:'https://pbs.twimg.com/media/EXZ3BXhUwAEFNBE?format=png&name=240x240',
			followerCount: 301,
			members:18
		},
	]

	const [searchInput, setSearchInput] = useState('');
	const filteredLists = groups.filter((item) =>
	  item.name.toLowerCase().includes(searchInput.toLowerCase())
	);
	return (
		<>
			<header
			className="sticky flex items-center   border-[color:var(--background-third)] top-0 z-10 bg-[color:var(--background-primary-alpha)] backdrop-blur-md"
		>
				<div className="px-4">
				<BackwardIcon />
				</div>
				<div className="px-4 pt-1 w-[80%]">
				<label className="h-[2.688rem] flex items-center rounded-full bg-transparent w-full relative group border border-gray-700 focus-within:bg-[color:var(--background-primary)] focus-within:border-[color:var(--color-primary)]">

<SearchIcon/>
<input 
				type="text"
				placeholder="Search Lists"
				value={searchInput}
				onChange={(e) => setSearchInput(e.target.value)}
				className="w-full h-full bg-transparent rounded-full outline-none  text-sm"
				/>
</label>
				</div>
			
			<NewListIcon/>
		
			<div className="px-4">
			<DotsIcon/>
				
			</div>
				</header>
				<div className="p-2 border-b border-[color:var(--background-third)]">
					<h1 className="p-2 text-2xl font-bold">Pinned Lists</h1>
					<p className="p-5 text-[#536471]">Nothing to see here yet — pin your favorite Lists to access them quickly.</p>
				</div>
			<div>
			<h1 className="py-3 px-5 text-2xl font-bold">Discover new Lists</h1>
			{filteredLists.map(item=>(
				<>
				<div className="flex items-center justify-between mx-4 ">
				<div className="flex gap-4 m-3 ">
				<img className="h-12 w-12 rounded-lg" src={item.profilePhoto} alt="" />
				<div className="flex flex-col">
				<div className="flex">
				<div>{item.name}</div>
				<span className="text-[#536471]"><span className="px-2">·</span>{item.members}</span>
				<span className="text-[#536471]">members</span></div>
				<p className="text-[#536471] text-sm">{item.followerCount} followers including @iyoba4u</p>
				</div>
				</div>
				<div className="">
				<PlusIcon/>
				</div>
				
				</div>
				
			
				
				</>
			))}
			</div>
			<Link
					
					className="h-[3.25rem] flex  items-center px-4 text-[color:var(--color-primary)]"
				>
					Show more
				</Link>
		</>
	)
}

