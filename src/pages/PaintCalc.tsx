import { useState } from "react"
import Header from "../components/Header"
import { selectShapes } from "../selects"
import Btn from "../ui/Btn"
import Field from "../ui/Field"
import FormControl from "../ui/FormControl"
import Select from "../ui/Select"

const PaintCalc: React.FC = () => {
  const [material, setMaterial] = useState<string>('pipe-square')

  return (
    <>
      <Header title="Калькулятор краски" />
      <div className="app-calc grid grid-2 grid-mb-1">
        <div className="appbox">
          <h4>Исходные данные</h4>
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

          <Btn title="Посчитать" type="submit" handler={() => {}} />
        </div>

        <div className="appbox">
          <h4>Расход краски</h4>
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

          {material === 'sheet' && <p>
            <label><input type="checkbox" /> Окраска с двух сторон</label>
          </p>}

          <Btn title="Посчитать" type="submit" handler={() => {}} />
        </div>
      </div>

      <div>
        <h4>Результат</h4>
        <p>Стоимость покрытия, руб/м&sup2; - 0</p>
        <p>Расход краски, г/м&sup2; - 0</p>
        <p>Укрываемость, м&sup2;/кг - 0</p>
        <p>Сколько потребуется краски, кг - 0</p>
      </div>
    </>
  )
}

export default PaintCalc
