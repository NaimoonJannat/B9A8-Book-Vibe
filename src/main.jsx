import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ListedBook from './Components/ListedBooks/ListedBook';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import Reviews from './Components/Reviews/Reviews';
import Contacts from './Components/Contacts/Contacts';
import ErrorPage from './Components/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedBooks",
        element: <ListedBook></ListedBook>,
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
      {
        path: "/contact",
        element: <Contacts></Contacts>,
      },
      
    ],
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
