import "./App.scss"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"

import { RootLayout } from "./components"
import { MainPage, NotFoundPage, Projects } from "./pages"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
)

const App = () => <RouterProvider router={router} />

export default App
