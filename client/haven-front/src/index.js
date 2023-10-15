import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './views/Home';
import Profile from './views/Profile';
import SignIn from './views/SignIn';
import Register from './views/Register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter([
{
  path: "/",
  element: <Home/>
},
{
  path: "/registre-se",
  element: <Register/>
},
{
  path: "/entrar",
  element: <SignIn/>
},
{
  path: "/perfil",
  element: <Profile/>
},
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

