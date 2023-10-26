
import { useState } from "react";
import { BackwardIcon, DotsIcon, NewCommunIcon, SearchIcon } from "../home/postArea/homePostIcons";

export default function Communities() {

	const communitiesArr =[
		{
			pic: "https://pbs.twimg.com/community_banner_img/1510054774489686026/D9msTxCG?format=jpg&name=360x360",
			name:'Startup Community',
			members: 10.2,
		},
		{
			pic: "https://pbs.twimg.com/community_banner_img/1508869800814161922/esu3Kjq9?format=jpg&name=360x360",
			name:'English Learners',
			members: 3.6,
		},
		{
			pic: "https://pbs.twimg.com/community_banner_img/1603211311877324800/y6iRkh1z?format=jpg&name=360x360",
			name:'Art',
			members: 2.8,
		},
		{
			pic: "https://pbs.twimg.com/community_banner_img/1570388531909902337/zY4nMSyQ?format=jpg&name=360x360",
			name:'European Culture',
			members: 3,
		},
	]

	const [searchInput, setSearchInput] = useState('');
	const filteredCommunities = communitiesArr.filter((item) =>
	  item.name.toLowerCase().includes(searchInput.toLowerCase())
	);
	return (
		<>
				<header
			className="sticky flex items-center my-1  border-[color:var(--background-third)] top-0 z-10 bg-[color:var(--background-primary-alpha)] backdrop-blur-md">
	
				<div className="px-2 flex items-center ">
				<BackwardIcon />
				</div>
				<label className="h-[2.688rem] flex items-center rounded-full bg-transparent w-full relative group border border-gray-700 focus-within:bg-[color:var(--background-primary)] focus-within:border-[color:var(--color-primary)]">

<SearchIcon/>
<input 
				type="text"
				placeholder="Search Communities"
				value={searchInput}
				onChange={(e) => setSearchInput(e.target.value)}
				className="w-full h-full bg-transparent rounded-full outline-none  text-sm"
				/>
</label>
				
				
			<NewCommunIcon/>
		
			<div className="px-4">
			<DotsIcon/>
				
			</div>
				</header>
				<div>
					{filteredCommunities.map(item=>(
						<div className="flex mx-4 my-6">
<div>
							<img className="w-[98px] h-[98px] rounded-xl object-cover "  src={item.pic} alt="" />
						</div>
						<div className="mx-3">
							<h1 className="font-semibold">{item.name}</h1>
							<p ><span className="font-semibold">{item.members}K </span><span className="">Members</span></p>
							<div className="flex mt-5">
								<div className="h-8 w-8 bg-gray-800 rounded-full"></div>
								<div className="h-8 w-8 bg-gray-800 rounded-full"></div>
								<div className="h-8 w-8 bg-gray-800 rounded-full"></div>
								<div className="h-8 w-8 bg-gray-800 rounded-full"></div>
								
							
							</div>
						</div>
						</div>
						
					))}
				</div>
		</>
	)
}
