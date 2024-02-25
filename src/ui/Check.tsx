import styled from "styled-components"
import check from "../assets/check.svg"
import checkWhite from "../assets/check-white.svg"
import { useAppStore } from "../store/appStore"

type CheckType = 'checkbox' | 'radio'

interface ICheck {
  label: string
  name?: string
  type?: CheckType
}

// Styles
const CheckDiv = styled.div`
  margin: 20px 0;
  &:last-child { margin: 0; }
`
const InputBox = styled.input<{ $type: CheckType, $theme: boolean }>`
  background: var(--color-bg) url(${props => props.$theme ? check : checkWhite}) -9999px / 18px no-repeat;
  border: 1px solid var(--color-line);
  border-radius: ${props => props.$type === 'radio' ? '50%' : '4px'};
  cursor: pointer;
  display: inline-block;
  height: 20px;
  margin: 0;
  padding: 0;
  min-width: 20px;
  max-width: 20px;
  -webkit-appearance: none;
  &:checked { background-position: center; }
`
const Label = styled.label`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  ${InputBox} { margin-right: 12px; }
`

const Check: React.FC<ICheck> = ({ label, name, type = 'checkbox' }) => {
  const theme = useAppStore(state => state.theme)

  return (
    <CheckDiv>
      <Label>
        <InputBox type={type} name={name} $type={type} $theme={theme} />
        {label}
      </Label>
    </CheckDiv>
  )
}

export default Check