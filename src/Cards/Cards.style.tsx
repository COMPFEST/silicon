import styled from 'styled-components'
import { SIZES } from './constants'
import { StyledCardsProps } from './interface'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #3e405b;
  border-radius: 24px;
  position: relative;
  width: 100%;
  transition: 0.5s;
`

export const Title = styled.div`
  font-weight: 400;
  // font-size: 24px;
  line-height: 120%;
  color: #ffffff;
  padding: 24px 24px 20px 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Body = styled.div`
  font-weight: 600;
  // font-size: 16px;
  line-height: 150%;
  color: rgba(255, 255, 255, 0.8);
  padding: 0px 24px 24px 24px;
  transition: all 2s linear;
`

export const Main = styled.div<StyledCardsProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: #373951;
  border-radius: 24px;
  ${({ size }) => SIZES[size]};
  text-align: start;
  transition: 0.2s;
`

export const Image = styled.img`
  border-radius: 24px;
  overflow: hidden;
  object-fit: cover;
  position: relative;
  width: 100%;
`
