import "./App.scss"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import NotFoundPage from "./pages/NotFoundPage"
import { RootLayout } from "./components"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<div>Main Page</div>} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
)

const App = () => <RouterProvider router={router} />

export default App
