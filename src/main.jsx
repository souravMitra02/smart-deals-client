import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import RootLayout from './layouts/RootLayout';
import Home from './components/Home/Home';
import AllProducts from './components/AllProducts/AllProducts';
import AuthProvider from './context/AuthProvider';
import Register from './components/Register/Register';
import MyProducts from './components/MyProducts/MyProducts';
import MyBids from './components/MyBids/MyBids';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "all-products", element: <AllProducts /> },
      { path: "register", element: <Register /> },
      { path: "my-products", element: <MyProducts /> },
      {path: "my-bids", element: <MyBids/>}
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
 <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>,
)
