
import StickyHeader from "../../components/sticky-header";

import Tab from "../../components/tab";
import { Timeline } from 'react-twitter-widgets'
import ForYou from "./for-you/ForYou";
import MyPosts from "../profile/MyPosts";
import { setProfile } from "../../store/profileReducer/ProfileReducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Home() {
	
	return (
		<div className=" m-auto ">
			<Tab activeTab="for-you">
				<StickyHeader >
					<Tab.Items>
						<Tab.Item id="for-you">
							For you
						</Tab.Item>
						<Tab.Item id="followings">
							Followings
						</Tab.Item>
					</Tab.Items>
				</StickyHeader>
				<Tab.Content id="for-you">
					<ForYou />
					<div className="mt-[-700px]">
					<MyPosts />
					</div>
					
				
					
				</Tab.Content>
				<Tab.Content id="followings">
					<div className="mt-4">
					<Timeline 
  dataSource={{
    sourceType: 'profile',
    screenName: 'elonmusk'
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
	)
}
