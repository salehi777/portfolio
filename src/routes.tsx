import { BrowserRouter, Route, Routes } from 'react-router'
import GlobalLayout from './layouts/global'
import HomePage from './pages/home'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
