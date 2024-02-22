import { useState } from "react"
import Shape, { ShapeList } from "./components/Shape"
import { shapesList } from "./helpers"
import Btn from "./ui/Btn"
import Screen from "./components/Screen"
import { ShapeType, materialsObjType } from "./types"
import Materials from "./components/Materials"
import Header from "./components/Header"
import { useAppStore } from "./store/store"
import { useForm } from "react-hook-form"
import Footer from "./components/Footer"
import Results from "./components/results/Results"
import Sidebar from "./components/Sidebar/Sidebar"


function App() {
  const [materials, setMaterials] = useState<materialsObjType | null>(null)
  const [shape, setShape] = useState<ShapeType>(shapesList[0])

  // Form
  const { handleSubmit, register, reset, formState: { errors } } = useForm()

  // State
  const theme = useAppStore(state => state.theme)
  const setResult = useAppStore(state => state.setResult)
  if (theme) {
    document.body.setAttribute('data-theme', 'light')
  } else {
    document.body.setAttribute('data-theme', 'dark')
  }


  // chooseShape
  const chooseShape = (val: ShapeType): void => {
    setShape(val)
    reset()
  }


  // calcHandler
  const calcHandler = (data: any) => {
    setResult({
      materials,
      shapeName: shape.title,
      shapeValue: shape.value,
      sizes: data
    })
  }
  

  return (
    <>
      <Sidebar />
      <div className="app">
        <Header />
        
        <div className="app-calc">
          <Materials setMaterials={setMaterials} />
          
          <form onSubmit={handleSubmit(calcHandler)} noValidate className="grid grid-2 grid-tb-1">
            <ShapeList className="appbox">
              {shapesList.map(el => <Shape key={el.id} handler={chooseShape} current={shape.value} el={el} />)}
            </ShapeList>
            
            <Screen shape={shape} register={register} errors={errors} />

            <Footer>
              <Btn title="Посчитать" type="submit" handler={() => {}} />
            </Footer>
          </form>
        </div>

        <Results />
      </div>
    </>
  )
}

export default App
