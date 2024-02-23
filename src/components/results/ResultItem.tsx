import styled from "styled-components"
import { ResultType } from "../../types"
import { ResultsTableTd } from "./Results"
import Line from "./Line"
import { useAppStore } from "../../store/store"
import Modal from "../Modal"
import { useState } from "react"
import Btn from "../../ui/Btn"
import Sizes from "./Sizes"

interface IResultItem {
  el: ResultType
}

// Styles
const Delete = styled.button`
  background-color: var(--color-white);
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 100px;
  border: 0;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.10);
  cursor: pointer;
  display: block;
  height: 32px;
  outline: none;
  padding: 0;
  position: absolute;
  right: 20px;
  top: 22px;
  width: 32px;
  @media screen and (max-width: 720px) {
    right: -6px;
    top: -6px;
  }
`

const ResultItem: React.FC<IResultItem> = ({ el }) => {
  const remove = useAppStore(state => state.removeResult)
  const [modal, setModal] = useState<boolean>(false)

  // removeItem
  const removeItem = () => {
    setModal(false)
    remove(el.id)
  }

  return (
    <>
      <ResultsTableTd className="grid grid-6 grid-mb-1">
        <Line name="Форма" value={el.shape} bold />
        <Line name="Материал / Марка" value={`${el.material} / ${(el.mark === 'Марка' ? '---' : el.mark)}`} />
        {/* <Line name="Марка" value={(el.mark === 'Марка' ? '---' : el.mark)} /> */}
        <Line name="Размеры">
          <Sizes sizes={el.sizes} type={el.setType} />
        </Line>
        <Line name="Вес, кг" value={el.weight} />
        <Line name="Площадь, м²" value={el.square} />
        <Line name="Цена" value={el.price} />
        <Delete className="deleteIcon" onClick={() => setModal(true)} />
      </ResultsTableTd>

      <Modal close={setModal} open={modal} title="Удалить результат" size="small">
        <div className="grid grid-2">
          <Btn handler={() => setModal(false)} title="Отмена" color="white" />
          <Btn handler={removeItem} title="Удалить" color="warning" />
        </div>
      </Modal>
    </>
  )
}

export default ResultItem
