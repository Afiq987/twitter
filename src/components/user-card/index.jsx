
import {useState} from "react";

export default function UserCard({user}) {

	const [following, setFollowing] = useState(false)

	return (
		<button className="py-3 px-4 flex gap-3 transition-colors hover:bg-[color:var(--background-third)]">
			<div className="flex-1 flex gap-3">
				<img src={user.avatar} className="w-10 h-10 rounded-full object-cover" alt=""/>
				<div className="w-[calc(100%-3.25rem)] text-left">
					<div className="leading-5 font-bold truncate">
						{user.fullName}
					</div>
					<div className="text-[color:var(--color-base-secondary)] truncate">@{user.username}</div>
				</div>
			</div>
			<div>
				{following ? (
					<button
						
						onClick={() => setFollowing(false)}
						className="whitespace-nowrap group px-4 h-8 text-sm border-[1px] border-gray-700 hover:bg-[#F4212E]/20  rounded-full  hover:text-[#F4212E] text-[--color-base] font-bold"
					>
						<div className="flex group-hover:hidden">Following</div>
						<div className="hidden group-hover:flex">Unfollow</div>
					</button>
				) : (
					<button className="bg-[color:var(--color-base)] px-4 h-8 text-sm border-[1px] border-gray-700  rounded-full   text-[color:var(--background-primary)] font-bold" onClick={() => setFollowing(true)}>
						Follow
					</button>
				)}
			</div>
		</button>
	)
}
