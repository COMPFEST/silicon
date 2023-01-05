import styled from 'styled-components'
import { isDisplayedProps } from './interface'

export const ModalContainter = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #28293d;
`

export const ModalContent = styled.div<isDisplayedProps>`
  display: ${({ isDisplayed }) => (isDisplayed ? 'block' : ' none')};
  background-color: #373951;
  margin: auto;
  padding: 20px;
  border: 1px solid #373951;
  width: 450px;
  border-radius: 25px;
  box-shadow: 0px 100px 126px rgba(0, 0, 0, 0.15),
    0px 41.7776px 52.6398px rgba(0, 0, 0, 0.107828),
    0px 22.3363px 28.1437px rgba(0, 0, 0, 0.0894161),
    0px 12.5216px 15.7772px rgba(0, 0, 0, 0.075),
    0px 6.6501px 8.37913px rgba(0, 0, 0, 0.0605839),
    0px 2.76726px 3.48674px rgba(0, 0, 0, 0.0421718);
`
