import { Route, Routes } from "react-router-dom"
import Home from "./pages/HomePage"
import IslandsPage from "./pages/IslandsPage"
import ContactUsPage from "./pages/ContactUsPage"
import CruisesPage from "./pages/CruisesPage"
import Header from "./components/Header"
import IndividualTravelById from "./pages/InvididualTravel"
import Plans from "./pages/PlansPage"
import IndividualCruise from "./pages/IndividualCruise"
import IndividualIsland from "./pages/IndividualIsland"
import Footer from "./components/Footer"

function App() {
  return <>
    <Header />
    <Routes>
      <Route path="/plan/:planId" element={<IndividualTravelById />} />
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/cruises" element={<CruisesPage />} />
      <Route path="/cruise/:cruiseId" element={<IndividualCruise />} />
      <Route path="/islands" element={<IslandsPage />} />
      <Route path="/island/:islandId" element={<IndividualIsland />} />
      <Route path="/plan" element={<Plans />} />
    </Routes>
    <Footer />
  </>
}

export default App
