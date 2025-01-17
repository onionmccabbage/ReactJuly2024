import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/Root.tsx'
import About from './routes/About.tsx'
import Contact from './routes/Contact.tsx'
import Weather from './routes/Weather.tsx'
// NB remember to npm install react-router-dom

// the brouser router is an array of routes
const router = createBrowserRouter([
  // the root route
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {path:'/contacts/:c_id',
        element:<Contact/>
      },
      {path:'/weather',
        element:<Weather/>
      }
    ]
  },
  // url/about
  {
    path: '/about',
    element: <About />
  },
  {}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* render a child depending on the URL route (RESTful URL) */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
