import { Route, Routes } from "react-router-dom"
import Home from "./pages/HomePage"
import Planify from "./pages/Planify"
import ContactUsPage from "./pages/ContactUsPage"
import CruisesPage from "./pages/CruisesPage"
import BudgetPage from "./pages/BudgetPage"
import FlightsPage from "./pages/FlightsHotel"

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planify" element={<Planify />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/cruises" element={<CruisesPage />} />
      <Route path="/budget" element={< BudgetPage />} />
      <Route path="/flightshotel" element={< FlightsPage />} />
    </Routes></>
}

export default App
