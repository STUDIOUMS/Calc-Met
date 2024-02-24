import { useAppStore } from "./store/store"
import { Route, Routes } from "react-router-dom"
import MetalCalc from "./pages/MetalCalc"
import PaintCalc from "./pages/PaintCalc"
import Sidebar from "./components/sidebar/Sidebar"
import InfoPage from "./pages/InfoPage"
import { useEffect } from "react"

function App() {
  const theme = useAppStore(state => state.theme)
  const aside = useAppStore(state => state.aside)

  if (theme) {
    document.body.setAttribute('data-theme', 'light')
  } else {
    document.body.setAttribute('data-theme', 'dark')
  }

  useEffect(() => {
    aside ? document.body.classList.add('modalOpened') : document.body.classList.remove('modalOpened')
  }, [aside])
  

  return (
    <>
      <Sidebar />
      <div className="app">
        <Routes>
          <Route index path="/" element={<MetalCalc />} />
          <Route path="/paint" element={<PaintCalc />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
