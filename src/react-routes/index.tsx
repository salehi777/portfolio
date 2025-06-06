import { BrowserRouter, Route, Routes } from 'react-router'
import { lazy, Suspense } from 'react'

import GeneralLayout from '@/layouts/general'

const HomePage = lazy(() => import('@/pages/home'))
const TestPage = lazy(() => import('@/pages/test'))

export default function ReactRoutes() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route element={<GeneralLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/test" element={<TestPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
