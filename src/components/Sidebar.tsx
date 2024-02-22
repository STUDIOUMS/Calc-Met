import React from "react"
import styled from "styled-components"
import { useAppStore } from "../store/store"

// Variables
const asideWidth = 300

// Sidebar
const Aside = styled.aside<{ $opened: boolean }>`
  background: var(--color-bg);
  border-right: 1px solid var(--color-line);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${asideWidth}px;
  z-index: 1000;
  transform: translateX(${props => props.$opened ? 'none' : `-${asideWidth}px`});
  transition: all 100ms linear;
`

const Sidebar: React.FC = () => {
  const { aside } = useAppStore()
  
  return (
    <Aside $opened={aside}>
      Aside
    </Aside>
  )
}

export default Sidebar
