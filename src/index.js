import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Contact from './components/pages/Contact';
import Team from './components/pages/Team';
import Home from './components/pages/Home';
import ResearchDay from './components/pages/ResearchDay';
import Gallary from './components/pages/Gallary';
import Workshop from './components/pages/Workshop';
import InvitedTalkSeries from './components/pages/InvitedTalkSeries';
import Sponser from './components/pages/Sponser';
import ResearchDay23 from './components/pages/ResearchDay23';
import ResearchDay22 from './components/pages/ResearchDay22';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

  },

  {
    path: "/contact",
    element: <Contact />,
    
  },
  {
    path: "/team",
    element: <Team />,
    
  },
  {
    path: "/researchday",
    element: <ResearchDay / >,
    
  },
  {
    path: "/gallary",
    element: <Gallary / >,
    
  },
  {
    path: "/workshops",
    element: <Workshop / >,
    
  },

  {
    path: "/talk-series",
    element: <InvitedTalkSeries / >,
    
  },

  {
    path: "/sponser",
    element: <Sponser / >,
    
  },

  {
    path: "/researchday22",
    element: <ResearchDay23 / >,
    
  },

  {
    path: "/researchday23",
    element: <ResearchDay22 / >,
    
  },
  
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
