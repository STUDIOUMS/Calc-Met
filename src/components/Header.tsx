import { useState } from 'react'
import BtnIcon from '../ui/BtnIcon'
import { useAppStore } from '../store/store'
import Modal from './Modal'

const Header: React.FC = () => {
  const [info, setInfo] = useState<boolean>(false)
  const { theme, toggleTheme, setAside } = useAppStore()

  return (
    <>
      <div className="app-header">
        <h1>Калькулятор металлов</h1>
        <BtnIcon areaLabel="Инструкция" classname="infoIcon" handler={() => setInfo(true)} />
        <BtnIcon areaLabel="Смена цвета темы" classname={`switchIcon ${theme ? 'active' : ''}`} handler={() => toggleTheme()} />
        <BtnIcon areaLabel="Меню" classname={`menuIcon ${theme ? 'active' : ''}`} handler={() => setAside()} />
      </div>

      <Modal close={setInfo} open={info} title="Инструкция">
        <p>Металлический онлайн-калькулятор веса металла «УралМетСтрой» позволяет быстро и точно рассчитать вес металлопроката конкретных марок и конфигураций.</p>
        <p>В нашем металлокалькуляторе удобно рассчитать вес стали, чугуна, алюминия, латуни, бронзы, меди, олова, магния, титана, свинца, никеля, цинка, а также их сплавов.</p>
        <p>В перечне ассортимента проката, который считает калькулятор металлов присутствует труба, уголок, лист, лента, круг, проволока, швеллер, балка, шестигранник, профильная труба и, с условной точностью, арматура.</p>
        <p>Калькулятор рассчитывает вес металлопроката по его удельному весу за несколько шагов. Введите размеры изделий и нажмите «Посчитать» — вы получите вес металлопроката в кг.</p>
        <p>Чтобы посчитать вес — введите длину и размеры.</p>
      </Modal>
    </>
  )
}

export default Header
