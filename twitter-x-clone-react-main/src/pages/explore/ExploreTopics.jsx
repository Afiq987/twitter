import React from 'react'
import {topics} from "../../utils/consts"
function ExploreTopics() {
  return (
    <>
        {topics.map((item)=>
	<div className="p-3">
	<div className="text-[0.813rem] text-[color:var(--color-base-secondary)] ">
			{item.title}
		</div>
		<div className="font-bold leading-5 mt-0.5">
			#{item.topic.value}
		</div>
		<div className="text-[0.813rem] text-[color:var(--color-base-secondary)] mt-1">
			{item.postCount}k posts
		</div>
	</div>
	
	)}
    </>
  )
}

export default ExploreTopics