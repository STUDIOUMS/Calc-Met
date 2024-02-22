import { useAppStore } from "../store/store"

interface IFooter {
  children: React.ReactNode
}

const Footer: React.FC<IFooter> = ({ children }) => {
  const results = useAppStore(state => state.results)
  const weight = results.length && results[0].weight

  return (
    <div className="appbox appbox-footer">
      <div className="appbox-total"><b>{weight ? weight : '---'}</b>, кг</div>
      {children}
    </div>
  )
}

export default Footer
