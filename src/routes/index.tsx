import { createBrowserRouter, RouterProvider } from 'react-router';

import GeneralLayout from '@/layouts/general';
import HomePage from '@/pages/home';

const router = createBrowserRouter([
  {
    element: <GeneralLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
