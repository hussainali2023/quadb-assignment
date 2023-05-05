import logo from './logo.svg';
import './App.css';

import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import CardDetails from './components/CardDetails/CardDetails';
import BookingTicket from './components/BookingTicket/BookingTicket';
import Card from './components/Card/Card';


function App() {
  const Router = createBrowserRouter([
    {
      path:'/',
      element:<Card/>
    },
    {
      path:'/card-details/:id',
      element: <CardDetails/>,
      loader: ({params}) =>{
       return fetch(`https://api.tvmaze.com/shows/${params.id}`)
      } 
    },
    {
      path:'/book-ticket/:id',
      element: <BookingTicket/>,
      loader: ({params}) =>{
       return fetch(`https://api.tvmaze.com/shows/${params.id}`)
      } 
    }
  ])
  return (
    <div>
    <RouterProvider router={Router}/>
    <Toaster/>
    </div>
  );
}

export default App;
