import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import links from "./Links/Links";
import './assets/css/tailwind.css'
import {Provider} from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
		<RouterProvider router={links} />
	</Provider>
)
