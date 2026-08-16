import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Songs from './Songs'
import SongComponent from './SongComponent'

function App() {

  const routes=createBrowserRouter([
    {
      path:'/',
      element: <Home/>,
      children:[
        {
          index:true,
          element:<SongComponent/>
        },
        {
          path:'/songs/:id',
          element:<Songs/>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App