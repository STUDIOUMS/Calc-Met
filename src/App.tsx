import { useAppStore } from "./store/store"
import { Route, Routes } from "react-router-dom"
import MetalCalc from "./pages/MetalCalc"
import PaintCalc from "./pages/PaintCalc"
import Header from "./components/Header"
import Sidebar from "./components/sidebar/Sidebar"

function App() {
  const theme = useAppStore(state => state.theme)

  if (theme) {
    document.body.setAttribute('data-theme', 'light')
  } else {
    document.body.setAttribute('data-theme', 'dark')
  }

  return (
    <>
      <Sidebar />
      <div className="app">
        <Header />

        <Routes>
          <Route index path="/" element={<MetalCalc />} />
          <Route index path="/paint" element={<PaintCalc />} />
        </Routes>
      </div>
    </>
  )
}

export default App
