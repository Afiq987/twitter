import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Explore from "../pages/explore/Explore";
import Notifications from "../pages/notifications/Notifications";
import NotFound from "../pages/not-found/NotFound";
import MainLayout from "../layouts/main";
import Profile from "../pages/profile/Profile";
import Messages from "../pages/messages/Messages";
import Lists from "../pages/lists/Lists";
import Communities from "../pages/communities/Communities";
import Login from "../components/login/Login";
import Register from "../components/login/Register";
import MyPosts from "../pages/profile/MyPosts";
import Replies from "../pages/profile/Replies";
import Media from "../pages/profile/Media";
import Highlights from "../pages/profile/Highlights";
import Likes from "../pages/profile/Likes";
import Posts from "../pages/profile/PostsProfile";
import PostsProfile from "../pages/profile/PostsProfile";

const links = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "lists",
        element: <Lists />,
      },
      {
        path: "communities",
        element: <Communities />,
      },
      {
        path: ":profile",
        element: <Profile />,
      //   children: [
      //     {
      //       index: true,
      //       path:"postsProfile",
      //       element:<PostsProfile/>,
      //     },
		  // {
			// path:"replies",
			// element:<Replies/>
		  // },
      // {
      //   path:"media",
      //   element:<Media/>
      //   },
      //   {
      //     path:"highlights",
      //     element:<Highlights/>
      //     },
      //     {
      //       path:"likes",
      //       element:<Likes/>
      //       }
      //   ],
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default links;
