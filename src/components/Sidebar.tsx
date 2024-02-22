import React from "react"
import styled from "styled-components"
import { useAppStore } from "../store/store"
import logo from "../assets/logo.svg"

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
const Overlay = styled.div<{ $opened: boolean }>`
  background: rgba(0,0,0,0.75);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 990;
  display: ${props => props.$opened ? 'block' : 'none'};
`
const LogoBody = styled.div`
  border-bottom: 1px solid var(--color-line);
  padding: 20px;
`
const Logo = styled.div`
  background: #fff;
  border-radius: 6px;
  display: inline-flex;
  margin: 0 0 10px;
  padding: 4px 8px;
  img { display: block; }
`
const LogoText = styled.div`
  color: var(--color-text);
`
const Nav = styled.ul`
  color: var(--color-text);
  display: block;
  margin: 0;
  padding: 0;
  li {
    border-bottom: 1px solid var(--color-line);
    list-style: none;
    a {
      color: var(--color-text);
      display: block;
      padding: 14px 20px;
      text-decoration: none;
      transition: all 200ms ease-in-out;
      &:hover {
        background: var(--color-line);
      }
    }
  }
`


const Sidebar: React.FC = () => {
  const { aside, setAside } = useAppStore()
  
  return (
    <>
      <Aside $opened={aside}>
        <LogoBody>
          <Logo>
            <img src={logo} alt="" />
          </Logo>
          <LogoText>Калькулятор металла и краски</LogoText>
        </LogoBody>
        <Nav>
          <li><a href="#">Калькулятор краски</a></li>
          <li><a href="#">Написать разработчику</a></li>
          <li><a href="#">Рассказать другу</a></li>
          <li><a href="#">О программе</a></li>
          <li><a href="#">Скачать на телефон</a></li>
        </Nav>
      </Aside>
      <Overlay $opened={aside} onClick={() => setAside()} />
    </>
  )
}

export default Sidebar
