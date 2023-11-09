import React, { useEffect } from 'react'

import { NavLink, Outlet } from 'react-router-dom'
import Header from './Header'
import ProfilePic from './ProfilePic'
import "./postsTabStyle.css"
import Tab from '../../components/tab'
import MyPosts from './MyPosts'
import Replies from "./Replies"
import { Timeline } from 'react-twitter-widgets'
import TabsCollect from '../../components/TabsCollect/TabsCollect'
import StickyHeader from '../../components/sticky-header'
import Highlights from './Highlights'

function PostsTab() {


  return (
  <>
    <Header/>
       <ProfilePic/>

       <div className="w-[490px] mt-[220px] m-auto sm:w-full">
		
    	<Tab activeTab="Posts">
				<StickyHeader>
        <Tab.Items>
						<Tab.Item id="Posts">
							Posts
						</Tab.Item>
            <Tab.Item id="Replies">
							Replies
						</Tab.Item>
            <Tab.Item id="Highlights">
							Highlights
						</Tab.Item>
            <Tab.Item id="Media">
							Media
						</Tab.Item>
						<Tab.Item id="Likes">
							Likes
						</Tab.Item>
					</Tab.Items>
        </StickyHeader>
				
				
				<Tab.Content id="Posts">
					
					<div className="mt-[20px]">
          <MyPosts />
					</div>
					
				
					
				</Tab.Content>
				<Tab.Content id="Replies">
					<div className="mt-4">
					<Timeline 
  dataSource={{
    sourceType: 'profile',
    screenName: 'MANPASI'
  }}
  options={{
	
    height: '3000',
	theme:"dark"
  }}
/>
					</div>

        




				</Tab.Content>

        <Tab.Content id="Highlights">
					
					<div className="mt-[20px]">
          <Highlights />
					</div>
          </Tab.Content>
        <Tab.Content id="Media">
					<div className="mt-4">
					<Timeline 
  dataSource={{
    sourceType: 'profile',
    screenName: 'RickandMorty'
  }}
  options={{
	
    height: '3000',
	theme:"dark"
  }}
/>
					</div>
				</Tab.Content>
			</Tab>
		</div>
  </>
  )
}

export default PostsTab