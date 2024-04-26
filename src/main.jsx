import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import AllArt from './Pages/AllArt/AllArt.jsx';
import AddCraftItem from './Pages/AddCraftItem/AddCraftItem.jsx';
import MyArtCraftList from './Pages/MyArtCraftList/MyArtCraftList.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'all_art',
        element: <AllArt></AllArt>
      },
      {
        path: 'add_craft',
        element: <AddCraftItem></AddCraftItem>
      },
      {
        path: 'my_art',
        element: <MyArtCraftList></MyArtCraftList>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
