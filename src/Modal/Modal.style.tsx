import styled from 'styled-components'
import { isDisplayedProps } from './interface'

export const ModalContainter = styled.div<isDisplayedProps>`
  display: ${({ isDisplayed }) => (isDisplayed ? 'block' : ' none')};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgb(40, 41, 61, 0.6);
`

export const ModalContent = styled.div`
  display: block;
  background-color: #373951;
  margin: auto;
  padding: 20px;
  border: 1px solid #373951;
  justify-content: center;
  width: 270px;
  border-radius: 25px;
  box-shadow: 0px 100px 126px rgba(0, 0, 0, 0.15),
    0px 41.7776px 52.6398px rgba(0, 0, 0, 0.107828),
    0px 22.3363px 28.1437px rgba(0, 0, 0, 0.0894161),
    0px 12.5216px 15.7772px rgba(0, 0, 0, 0.075),
    0px 6.6501px 8.37913px rgba(0, 0, 0, 0.0605839),
    0px 2.76726px 3.48674px rgba(0, 0, 0, 0.0421718);
`
export const HeadingText = styled.p`
  color: #ffffff;
  font-family: 'R-Flex';
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 50%;
  line-height: 1;
`

export const ContentText = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Inter';
  font-style: normal;
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
  font-weight: 600;
  font-size: 16px;
`

export const TextContainter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0px 2px;
`

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.75rem;
  min-width: 100%;
`

export const ImgContainer = styled.img`
  width: 100%;
  height: 200px;
`
