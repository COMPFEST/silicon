import styled from 'styled-components'
import { CardsProps } from './interface'

export const Content = styled.div<CardsProps>`
  display: flex;
  flex-direction: column;
  background: #3e405b;
  border-radius: 24px;
  position: relative;
  ${(props) =>
    `width: ${props.width}px;`
  }
`

export const Title = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  color: #ffffff;
  padding: 24px 24px 20px 24px;
`

export const Body = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: rgba(255, 255, 255, 0.8);
  padding: 0px 24px 24px 24px;
`

export const Main = styled.div<CardsProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: #373951;
  border-radius: 24px;
  ${(props) =>
    `width: ${props.width}px;`
  }
`

export const Image = styled.img<CardsProps>`
  border-radius: 24px;
  overflow: hidden;
  object-fit: cover;
  position: relative;
  ${(props) =>
    `width: ${props.width}px;`
  }
`
