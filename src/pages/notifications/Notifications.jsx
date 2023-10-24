import StickyHeader from "../../components/sticky-header";

import Tab from "../../components/tab";
import Feedback from "./Feedback";



export default function Notifications() {

 
  return (


    
		<div className="w-[490px] m-auto sm:w-full">
			<Tab activeTab="all">
				<StickyHeader title="Notifications">
					<Tab.Items>
						<Tab.Item id="all">
							All
						</Tab.Item>
						<Tab.Item id="Verified">
							Verified
						</Tab.Item>
            <Tab.Item id="Mentions">
							Mentions
						</Tab.Item>
					</Tab.Items>
				</StickyHeader>
				<Tab.Content id="all">
          <div className="m-7">
          <Feedback/>
          </div>
				
				</Tab.Content>
				<Tab.Content id="Verified">
					<div className="mt-4 px-[23%]">
            <img className="w-[300px]"  src="https://abs.twimg.com/responsive-web/client-web/verification-check-800x400.v1.52677a99.png" alt="" />
					<div className="mt-6 ">
				<h1 className="text-3xl font-bold">Nothing to see here — yet</h1>
        <p className="text-gray-500">Likes, mentions, reposts, and a whole lot more — when it comes from a verified account, you’ll find it here.</p>
          </div>
          </div>
				</Tab.Content>
        <Tab.Content id="Mentions">
					<div className="mt-6 px-[23%]">
				<h1 className="text-3xl font-bold">Nothing to see here — yet</h1>
        <p className="text-gray-500">When someone mentions you, you’ll find it here.</p>
          </div>
				</Tab.Content>
			</Tab>
		</div>
		  
	
	
	
   
  );
}



