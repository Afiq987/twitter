
import StickyHeader from "../../components/sticky-header";

import Tab from "../../components/tab";
import { Timeline } from 'react-twitter-widgets'
import ForYou from "./for-you/ForYou";
import MyPosts from "../profile/MyPosts";

export default function Home() {
	return (
		<div className="w-[490px] m-auto sm:w-full">
			<Tab activeTab="for-you">
				<StickyHeader title="Home">
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
					
					<MyPosts />
				
					
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
