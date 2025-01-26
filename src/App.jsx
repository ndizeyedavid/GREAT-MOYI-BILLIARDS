import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import PlayOnline from "./pages/PlayOnline"
import Services from "./pages/Services"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/play" element={<PlayOnline />} />
        <Route path="/about" element={<Services />} />
        <Route path="/Order" element={<p>Order page</p>} />
        <Route path="/contact" element={<p>Contact page</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
