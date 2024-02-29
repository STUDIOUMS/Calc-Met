import { useRef, useState } from "react"
import styled from "styled-components"

interface ISpoiler {
  children: React.ReactNode
  title: string
}

// Styles
const Head = styled.button`
  background: var(--color-bg);
  border: 0;
  border-radius: 10px;
  color: var(--color-text);
  cursor: pointer;
  display: block;
  font-family: var(--ff);
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  padding: 10px 16px;
`
const Hidden = styled.div<{ $height: number, $open: boolean }>`
  height: ${props => props.$open ? `${props.$height}px` : 0};
  overflow: hidden;
  transition: height 100ms linear;
`
const HiddenInner = styled.div``

const Spoiler: React.FC<ISpoiler> = ({ children, title }) => {
  const [desc, setDesc] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div>
      <Head onClick={() => setDesc(!desc)}>{title}</Head>
      <Hidden $open={desc} $height={ref.current?.clientHeight!}>
        <HiddenInner ref={ref}>
          {children}
        </HiddenInner>
      </Hidden>
    </div>
  )
}

export default Spoiler
