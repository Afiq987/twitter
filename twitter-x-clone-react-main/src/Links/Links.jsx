import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home/Home";
import Explore from "../pages/explore/Explore";
import Notifications from "../pages/notifications/Notifications";
import NotFound from "../pages/not-found/NotFound";
import MainLayout from "../layouts/main";
import Profile from "../pages/profile/Profile";
import Messages from "../pages/messages/Messages";
import Lists from "../pages/lists/Lists";
import Bookmarks from "../pages/bookmarks/Bookmarks";
import Login from "../components/login/Login";
import Register from "../components/login/Register";

const links = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'explore',
				element: <Explore />
			},
			{
				path: 'notifications',
				element: <Notifications />
			},
			{
				path: 'messages',
				element: <Messages />
			},
			{
				path: 'lists',
				element: <Lists />
			},
			{
				path: 'bookmarks',
				element: <Bookmarks />
			},
			{
				path: ':slug',
				element: <Profile />
			},
		
			{
				path: '*',
				element: <NotFound />
			}
		]
		
	},
	{
		path:"login",
		element:<Login/>
	},
	{
		path:"register",
		element:<Register/>
	},
])

export default links
