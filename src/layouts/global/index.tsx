import { Outlet } from 'react-router'
import Header from './header'
import { StyledLayout } from './styles'

export default function GlobalLayout() {
  return (
    <StyledLayout>
      <Header />
      <main>
        <Outlet />
      </main>
    </StyledLayout>
  )
}
