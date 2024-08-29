import { Route, Routes } from "react-router-dom"
import Home from "./pages/HomePage"
import IslandsPage from "./pages/IslandsPage"
import ContactUsPage from "./pages/ContactUsPage"
import CruisesPage from "./pages/CruisesPage"
import Header from "./components/Header"
import IndividualTravelById from "./pages/InvididualTravel"
import Plans from "./pages/PlansPage"

function App() {
  return <>
    <Header />
    <Routes>
      <Route path="/plan/:planId" element={<IndividualTravelById />} />
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/cruises" element={<CruisesPage />} />
      <Route path="/islands" element={<IslandsPage />} />
      <Route path="/plan" element={<Plans />} />
    </Routes></>
}

export default App
