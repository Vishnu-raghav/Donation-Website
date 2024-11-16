
import ReactDOM from 'react-dom/client';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import DonatePage from './pages/DonatePage/DonatePage';
import './index.css'; 
import HomePage from './pages/HomePage/Home';
import About from './pages/About/about'
import Contact from './pages/ContactPage/Contact';
import NgoPage from './pages/NgoPage/Ngopage';


const router = createBrowserRouter([
  {
    path : '/',
    element: <App/>,
    children:[
       {
        path : '',
        element : <HomePage/>

       },
       {
        path : 'About',
        element:<About/>
       },
       {
        path : 'Contact',
        element : <Contact/>
       },
       {
         path: '/ngo/:id', // :id is the dynamic parameter
         element: <NgoPage /> 
       },
       {
        path: "/donate/:id" ,
        element: <DonatePage />
       }
      ]
    },
  
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>

);









