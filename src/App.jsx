
import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import News from "./pages/News"
import "./css/style.css"

function App() {
  
  return (
    <>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/news" element={<News/>}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
