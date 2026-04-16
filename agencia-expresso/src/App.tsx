import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Ferramentas from './pages/ferramentas/Ferramentas'
import CalculadoraCMV from './pages/ferramentas/CalculadoraCMV'
import SimuladorCombo from './pages/ferramentas/SimuladorCombo'
import Blog from './pages/blog/Blog'
import BlogPost from './pages/blog/BlogPost'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ferramentas" element={<Ferramentas />} />
          <Route path="ferramentas/calculadora-cmv" element={<CalculadoraCMV />} />
          <Route path="ferramentas/simulador-combo" element={<SimuladorCombo />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}