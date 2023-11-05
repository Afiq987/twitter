import React from 'react'
import { PinnedIcon, PlusIcon } from '../home/postArea/homePostIcons'

function AddedList({addedProd}) {
  return (
    <>
				<div className="flex items-center justify-between mx-4 ">
				<div className="flex gap-4 m-3 ">
				<img className="h-12 w-12 rounded-lg" src={addedProd.profilePhoto} alt="" />
				<div className="flex flex-col">
				<div className="flex">
				<div>{addedProd.name}</div>
				<span className="text-[#536471]"><span className="px-2">·</span>{addedProd.members}</span>
				<span className="text-[#536471]">members</span></div>
				<p className="text-[#536471] text-sm">{addedProd.followerCount} followers including @iyoba4u</p>
				</div>
				</div>
				<div className="">
				<PinnedIcon/>
				</div>
				
				</div>
				
			
				
				</>
  )
}

export default AddedList