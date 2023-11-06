import React, { useState } from 'react'
import { PlusIcon } from '../home/postArea/homePostIcons'
import AddedList from './AddedList'

function List({prod,added,setAdded}) {
  
	const add=(prod)=>{
		const isProductAlreadyAdded = added.some((item) => item.name === prod.name);

		if (!isProductAlreadyAdded) {
			setAdded((prevState) => [...prevState, prod]);
		  }
		
			}
			
  return (
    <>
				<div className="flex items-center justify-between mx-4 ">
				<div className="flex gap-4 m-3 ">
				<img className="h-12 w-12 rounded-lg" src={prod.profilePhoto} alt="" />
				<div className="flex flex-col">
				<div className="flex">
				<div>{prod.name}</div>
				<span className="text-[#536471]"><span className="px-2">·</span>{prod.members}</span>
				<span className="text-[#536471]">members</span></div>
				<p className="text-[#536471] text-sm">{prod.followerCount} followers including @iyoba4u</p>
				</div>
				</div>
				<div  onClick={()=>add(prod)}>
				<PlusIcon />
				</div>
               
				
				</div>
				
               
				
				</>
  )
}

export default List