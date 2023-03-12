import styled from 'styled-components'
import { SIZES } from './constants'
import { StyledCardProps } from './interface'

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  background: #3e405b;
  border-radius: 24px;
  position: relative;
  width: 100%;
  transition: 0.5s;
`

export const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  color: #ffffff;
  padding: 24px 24px 20px 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Body = styled.div`
  font-weight: 600;
  line-height: 150%;
  color: rgba(255, 255, 255, 0.8);
  padding: 0px 24px 24px 24px;
  transition: all 2s linear;
`

export const Main = styled.div<StyledCardProps>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction == 'horizontal' ? 'column' : 'row'};
  justify-content: flex-end;
  align-items: center;
  background: #373951;
  border-radius: 24px;
  ${({ size, direction }) => SIZES[size][direction]};
  text-align: start;
  transition: 0.2s;
`

export const Content = styled.div<{
  direction: 'vertical' | 'horizontal'
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ direction }) => (direction == 'horizontal' ? '250px' : '100%')};
  position: relative;
`
