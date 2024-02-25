interface IRange {
  handler: (val: number) => void
  min?: number
  max: number
  step?: number
}

const Range: React.FC<IRange> = ({  }) => {
  return (
    <div></div>
  )
}

export default Range
