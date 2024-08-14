import { Route, Routes } from "react-router-dom"
import Home from "./pages/HomePage"
import Despre from "./pages/DesprePage"
import ContactUsPage from "./pages/ContactUsPage"
import OpinionsPage from "./pages/OpinionsPage"
import OurServices from "./pages/OurServicesPage"
import ProducstPage from "./pages/ProductsPage"

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/desprenoi" element={<Despre />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/opinions" element={<OpinionsPage />} />
      <Route path="/ourservices" element={< OurServices />} />
      <Route path="/ourproducts" element={< ProducstPage />} />
    </Routes>
    Ready to code with Mantine, a router would be nice in there 😺</>
}

export default App
