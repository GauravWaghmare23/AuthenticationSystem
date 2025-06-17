import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Not from './components/Not.jsx'
import Protected from './components/AuthLayout.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import Home from './components/Home.jsx'
import Signup from './components/Signup.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Not />
      },
      {
        path: "/login",
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        )
      },
      {
        path: "/signup",
        element: (
          <Protected authentication={false}>
            <Signup />
          </Protected>
        )
      },
      {
        path: "/home",
        element: (
          <Protected authentication={true}>
            <Home />
          </Protected>
        )
      },
      {
        path: "/profile",
        element: (
          <Protected authentication={true}>
            <Profile />
          </Protected>
        )
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
