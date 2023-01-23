import styled from 'styled-components'
import { ModalExtensionProps } from './interface'
import { ModalSizeProps } from './interface'

export const ModalContainter = styled.div<ModalExtensionProps>`
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

export const ModalContent = styled.div<ModalSizeProps>`
  display: block; 
  background-color: #373951;
  margin: auto;
  padding: 20px;
  border: 1px solid #373951;
  justify-content: center;
  width: ${({ variant }) => (variant == 'lg' ? '500px' : variant == 'sm' ? '230px' : '270px')};
  gap:2;
  border-radius: 25px;
  box-shadow: 0px 100px 126px rgba(0, 0, 0, 0.15),
    0px 41.7776px 52.6398px rgba(0, 0, 0, 0.107828),
    0px 22.3363px 28.1437px rgba(0, 0, 0, 0.0894161),
    0px 12.5216px 15.7772px rgba(0, 0, 0, 0.075),
    0px 6.6501px 8.37913px rgba(0, 0, 0, 0.0605839),
    0px 2.76726px 3.48674px rgba(0, 0, 0, 0.0421718);
`
export const ModalContentContainter = styled.div<ModalSizeProps>`
  display: flex;
  flex-direction: ${({ variant }) => (variant == 'lg' ? 'row' : ' column')};
  gap : 25px;
`

export const FillContainter = styled.div`
  display : flex,
  flex-direction : column,
`
export const HeadingText = styled.p<ModalSizeProps>`
  color: #ffffff;
  font-family: 'R-Flex';
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 1;
  margin: ${({ variant }) => (variant == 'lg' ? '16px 0px 0px 0px' : '0')};
`

export const ContentText = styled.div`
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
  margin:0;
`

export const HeadingContainer = styled.div<ModalSizeProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ variant }) => (variant == 'lg' ? 'flex-start' : 'center')};
  height : fit;
`

export const ButtonContainer = styled.div<ModalSizeProps>`
  display: flex;
  flex-direction : ${({ variant }) => (variant == 'sm' ? 'column' : 'row')};
  justify-content: ${({ variant }) => (variant == 'lg' ? 'flex-end' : 'center')};
  gap: 0.75rem;
  min-width: 100%;
`

export const ImgContainer = styled.img<ModalSizeProps>`
  width: ${({ variant }) => (variant == 'lg' ? '300px' : '100%')};
  height: 200px;
  border-radius: 25px;
`
