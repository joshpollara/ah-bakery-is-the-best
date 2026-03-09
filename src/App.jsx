import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Rankings from './pages/Rankings'
import FAQ from './pages/FAQ'
import About from './pages/About'
import Methodology from './pages/Methodology'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/methodology" element={<Methodology />} />
      </Route>
    </Routes>
  )
}

export default App
