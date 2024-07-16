import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'
// import { Route } from 'react-router-dom'

// const router = createBrowserRouter([
  //  {
  //   path:'/',
  //   element:<Layout/>,
  //   children:[
  //     {
  //       path:'/',
  //       element:<Home/>
  //     },
  //     {
  //       path:'about',
  //       element:<About/>
  //     },
  //     {
  //       path:'contact',
  //       element: <Contact/>
  //     }
  //   ]
  //  }
// ])
  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User/>} />
      <Route loader={githubInfoLoader} path='github' element={<Github/>} />
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
