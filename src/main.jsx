import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import RootLayout from './layouts/RootLayout';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home/> },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />,
  </StrictMode>,
)
