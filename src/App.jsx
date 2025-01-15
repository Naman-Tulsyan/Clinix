import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import BookSlot from "./components/BookSlot"
import ContactPage from "./components/ContactPage"
import LoginPage from "./components/LoginPage"
import SignUpPage from "./components/SignUpPage"

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        path:'',
        element: <Home/>
      },
      {
        path:'slot-book',
        element: <BookSlot />
      },
      {
        path:'contact',
        element: <ContactPage />
      },
      {
        path: 'log-in',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <SignUpPage />
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
