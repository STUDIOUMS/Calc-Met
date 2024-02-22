import styled from "styled-components"

type ColorType = 'line' | 'warning' | 'blue' | 'transparent'

interface IBtnIcon<T> {
  classname?: string
  color?: ColorType
  handler: React.Dispatch<React.SetStateAction<T>>
  rounded?: boolean
  areaLabel?: string
}

// Styles
const Icon = styled.button<{ $color: ColorType, $rounded: boolean }>`
  background-color: var(--color-${props => props.$color});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px;
  border: 0;
  border-radius: ${props => props.$rounded ? '50%' : '6px'};
  cursor: pointer;
  outline: none;
  padding: 0;
  height: 40px;
  width: 40px;
`

const BtnIcon: React.FC<IBtnIcon<any>> = ({ areaLabel, classname, color = 'line', handler, rounded = false }) => {
  return (
    <Icon className={classname} onClick={handler} $color={color} $rounded={rounded} aria-label={areaLabel} />
  )
}

export default BtnIcon
