import Header from "../components/Header"
import Btn from "../ui/Btn"
import Field from "../ui/Field"
import FormControl from "../ui/FormControl"

const PaintCalc: React.FC = () => {
  return (
    <>
      <Header title="Калькулятор краски" />
      <div className="app-calc">
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

          <h4>Результат</h4>
          <p>Стоимость покрытия, руб/м&sup2; - 0</p>
          <p>Расход краски, г/м&sup2; - 0</p>
          <p>Укрываемость, м&sup2;/кг - 0</p>

        </div>
      </div>
    </>
  )
}

export default PaintCalc
