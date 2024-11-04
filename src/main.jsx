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


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
