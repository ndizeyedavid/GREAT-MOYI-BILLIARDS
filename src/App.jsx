import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { Suspense, lazy } from "react"

const Home = lazy(() => import("./pages/Home"))
const Explore = lazy(() => import("./pages/Explore"))
const PlayOnline = lazy(() => import("./pages/PlayOnline"))
const Services = lazy(() => import("./pages/Services"))
const Contact = lazy(() => import("./pages/Contact"))
const Product = lazy(() => import("./pages/Product"))
const News = lazy(() => import("./pages/News"))
const ReadNews = lazy(() => import("./pages/ReadNews"))

import FullLoading from "./components/FullLoading"
import ProgressBar from "./components/ProgressBar"

function App() {

  return (
    <>
      <BrowserRouter>
        {/* Cool page loading */}
        <ProgressBar />
        <Suspense fallback={<FullLoading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/explore/:id" element={<Product />} />
            <Route path="/play" element={<PlayOnline />} />
            <Route path="/about" element={<Services />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:title" element={<ReadNews />} />
            {/* <Route path="/Order" element={<p>Order page</p>} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
