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

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "allProducts", element: <AllProducts /> },
      {path: "register", element: <Register/>}
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
