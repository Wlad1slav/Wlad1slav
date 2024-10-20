import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomePage from "@/components/pages/home-page.tsx";
import HomeLayout from "@/components/layouts/home-layout.tsx";
import CvPage from "@/components/pages/cv-page.tsx";

const router = createBrowserRouter([
    {
        path: "/Wlad1slav",
        element: (
            <HomeLayout>
                <HomePage />
            </HomeLayout>
        ),
    },
    {
        path: "/Wlad1slav/cv/:langParam",
        element: <CvPage />
    },
    {
        path: "*",
        element: (
            <HomeLayout>
                <HomePage />
            </HomeLayout>
        ),
    }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
