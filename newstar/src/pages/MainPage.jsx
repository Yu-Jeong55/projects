import { Outlet, useLocation } from "react-router-dom"

import { ContainerWithNav, TotalContainer } from "../styles/Container"
import { TopNavbar, TopNavbarWithoutBack, BottomNavbar } from "../components/Navbar";
import ScrollToTop from "../Hooks/ScrollToTop";

function MainPage() {
  const location = useLocation()

  function renderTopNavbar() {
    if (location.pathname == '/newstar') {
      return <TopNavbarWithoutBack />
    } else {
      return <TopNavbar />
    }
  }

  return (
    <TotalContainer>
      <ScrollToTop>
        {renderTopNavbar()}
        <ContainerWithNav>
          <Outlet/>
        </ContainerWithNav>
        <BottomNavbar/>
      </ScrollToTop>
    </TotalContainer>
  )
}

export default MainPage