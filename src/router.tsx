import { createBrowserRouter } from "react-router-dom"
import { MainLayout } from "./components/layout/MainLayout"

import HomePage from "./pages/HomePage"
import PlacePage from "./pages/PlacePage"
import ExplorePage from "./pages/ExplorePage"
import MapPage from "./pages/MapPage"
import SavedPage from "./pages/SavedPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "places/:id",
        element: <PlacePage />,
      },
      {
        path: "explore",
        element: <ExplorePage />,
      },
      {
        path: "map",
        element: <MapPage />,
      },
      {
        path: "saved",
        element: <SavedPage />,
      },
    ],
  },
])