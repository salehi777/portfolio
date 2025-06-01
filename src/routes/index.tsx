import { createBrowserRouter, RouterProvider } from 'react-router'
import { lazy, Suspense } from 'react'

import GeneralLayout from '@/layouts/general'

const HomePage = lazy(() => import('@/pages/home'))
const TestPage = lazy(() => import('@/pages/test'))

const router = createBrowserRouter([
  {
    element: <GeneralLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/test',
        element: <TestPage />,
      },
    ],
  },
])

export default function Routes() {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  )
}
