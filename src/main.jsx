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
import PrivateRoutes from './Pages/PrivateRoutes/PrivateRoutes.jsx';
import CraftDetails from './Pages/CraftDetails/CraftDetails.jsx';
import UpdateMyArt from './Pages/UpdateMyArt/UpdateMyArt.jsx';
import AllCraftDetails from './Pages/AllCraftDetails/AllCraftDetails.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/Craft_Item')
      },
      {
        path: '/craft_details/:id',
        element: <PrivateRoutes><CraftDetails></CraftDetails></PrivateRoutes>,
        loader: () => fetch('http://localhost:5000/Craft_Item')

      },
      {
        path: 'all_art',
        element: <AllArt></AllArt>,
        loader: () => fetch('http://localhost:5000/all_craft')
      },
      {
        path: '/all_craft_details/:id',
        element: <PrivateRoutes><AllCraftDetails></AllCraftDetails></PrivateRoutes>,
        loader: () => fetch(`http://localhost:5000/all_craft`)
      },
      {
        path: 'add_craft',
        element: <PrivateRoutes><AddCraftItem></AddCraftItem></PrivateRoutes>
      },
      {
        path: 'my_art',
        element: <PrivateRoutes><MyArtCraftList></MyArtCraftList></PrivateRoutes>
      },
      {
        path: '/update_craft/:id',
        element: <PrivateRoutes><UpdateMyArt></UpdateMyArt></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/update_craft/${params.id}`)
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
