import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/Layout/MainLayout';
import Home from './components/HomePage/Home';
import Statistics from './components/OtherPages/Statistics';
import Dashboard from './components/OtherPages/Dashboard';
import GadgetCards from './components/Explore/GadgetCards';
import GadgetDetails from './components/Explore/gadgetDetails';
import ListedProduct from './components/OtherPages/ListedProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Faq from './components/OtherPages/Faq';
import Error from './components/OtherPages/Error';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: "/",
            element: <GadgetCards></GadgetCards>,
            loader: () => fetch('../gadgets.json'),
          },
          {
            path: "/category/:category",
            element: <GadgetCards></GadgetCards>,
            loader: () => fetch('../gadgets.json'),
          },
        ],
      },
      {
        path: "/gadget/:id",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch('../gadgets.json'),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/gadgets.json'),
        children: [
          {
            path: 'listedProduct',
            element: <ListedProduct></ListedProduct>
          }
        ]
      },
      {
        path: "/faq",
        element: <Faq></Faq>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition:Bounce
    />
  </StrictMode>,
)
