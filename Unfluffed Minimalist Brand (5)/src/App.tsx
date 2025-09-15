import { HashRouter, Route, Routes } from 'react-router'
import home from './pages/home'
import kitpage from './pages/kitpage'
import aboutpage from './pages/aboutpage'
import contactpage from './pages/contactpage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/kit/:kitId" element={<kitpage />} />
        <Route path="/about" element={<aboutpage />} />
        <Route path="/contact" element={<contactpage />} />
      </Routes>
    </HashRouter>
  )
}
