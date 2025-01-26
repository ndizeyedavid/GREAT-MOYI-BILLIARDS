import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import PlayOnline from "./pages/PlayOnline"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:id" element={<Product />} />
        <Route path="/play" element={<PlayOnline />} />
        <Route path="/about" element={<Services />} />
        {/* <Route path="/Order" element={<p>Order page</p>} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
