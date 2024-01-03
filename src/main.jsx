import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import Login from './components/Login.jsx';
// import Login from '../pages/Login.jsx';
// import Signup from '../pages/Signup.jsx';
// import Info from '../pages/Info.jsx';

import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  }
  // {
  //   path: '/info',
  //   element: <Info />,
  // },
  
  // {
  //   path: '/login',
  //   element: <Login />
  // },
  // {
  //   path: '/signup',
  //   element: <Signup />
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);