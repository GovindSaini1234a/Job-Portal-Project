//import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/ui/shared/Navbar'
import Signup from './components/ui/auth/Signup'
import Login from './components/ui/auth/Login'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'

const appRouter = createBrowserRouter([
   {
    path:'/',
    element:<Home/>
   },
    {
    path:'/login',
    element:<Login/>
   },
    {
    path:'/signup',
    element:<Signup/>
   },
    {
    path:'/jobs',
    element:<Jobs/>
   },
   {
    path:'/browse',
    element:<Browse/>
   },
    {
    path:'/profile',
    element:<Profile/>
   },
])

const App = () => {
  return (
    <>
   <RouterProvider router = {appRouter}/>
    </>
  )
}

export default App

