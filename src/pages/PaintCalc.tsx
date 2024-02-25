import { useState } from "react"
import Header from "../components/Header"
import { selectShapes } from "../selects"
import Btn from "../ui/Btn"
import Field from "../ui/Field"
import FormControl from "../ui/FormControl"
import Select from "../ui/Select"
import Range from "../ui/Range"
import Check from "../ui/Check"

const PaintCalc: React.FC = () => {
  const [material, setMaterial] = useState<string>('pipe-square')

  return (
    <>
      <Header title="Калькулятор краски" />
      <div className="app-calc app-paint grid grid-2 grid-mb-1">
        <div className="appbox">
          <h2>Исходные данные</h2>
          <Field title="Цена краски, руб/кг">
            <FormControl error={false} register={() => {}} />
          </Field>
          <Field title="Удельный вес, г/см³">
            <FormControl error={false} register={() => {}} />
          </Field>
          <Field title="Толщина покрытия, мкм">
            <FormControl error={false} register={() => {}} />
          </Field>
          <Field title="Коэффициент, %">
            <FormControl error={false} register={() => {}} />
          </Field>

          <Range max={100} handler={() => {}} />
        </div>

        <div className="appbox">
          <h2>Расход краски</h2>
          <Field title="Материал окраски">
            <Select handler={(val) => setMaterial(val)} list={selectShapes} />
          </Field>
          <Field title="Площадь детали, м²">
            <FormControl error={false} register={() => {}} />
          </Field>
          <Field title="Количество, шт">
            <FormControl error={false} register={() => {}} />
          </Field>
          <Field title="Количество слоев">
            <FormControl error={false} register={() => {}} />
          </Field>

          {material === 'sheet' && <Check label="Окраска с двух сторон" />}
        </div>

        <div className="appbox text-right">
          <Btn title="Посчитать" type="submit" handler={() => {}} />
        </div>
      </div>

      <div>
        <h2>Результат</h2>
        <p>Стоимость покрытия, руб/м&sup2; - 0</p>
        <p>Расход краски, г/м&sup2; - 0</p>
        <p>Укрываемость, м&sup2;/кг - 0</p>
        <p>Сколько потребуется краски, кг - 0</p>
      </div>
    </>
  )
}

export default PaintCalc
