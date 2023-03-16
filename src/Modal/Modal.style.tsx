import styled from 'styled-components'
import { ModalContentProps, ModalProps } from './interface'

export const ModalDiv = styled.div<ModalProps>`
  display: ${({ isDisplayed }) => (isDisplayed ? 'block' : ' none')};
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
`

export const ModalOverlayDiv = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(40, 41, 61, 0.2);
  backdrop-filter: blur(1px);
  z-index: 99;
`

export const ModalContentDiv = styled.div<ModalContentProps>`
  @media only screen and (min-width: 768px) {
    display: ${({ variant }) => (variant === 'lg' ? 'grid' : '')};
  }
  grid-template-columns: minmax(0px, max-content);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${({ variant }) =>
    variant === 'lg' ? '600px' : variant === 'md' ? '400px' : '300px'};
  max-width: 70%;
  max-height: 70vh;
  overflow: auto;
  background-color: #373951;
  padding: 40px;
  border-radius: 24px;
  z-index: 999;
`

export const ModalCloseButtonDiv = styled.div`
  display: block;
  grid-column: 1/3;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 100%;
  width: fit-content;
  cursor: pointer;
  z-index: 9999;
`

export const ModalImageDiv = styled.div<ModalContentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) {
    margin-top: ${({ variant }) => (variant === 'lg' ? '-24px' : '')};
    margin-right: ${({ variant }) => (variant === 'lg' ? '24px' : '')};
  }
  grid-row: 2/5;
`

export const ModalHeaderDiv = styled.div<ModalContentProps>`
  font-size: 32px;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-top: 32px;
  margin-bottom: 12px;
  @media only screen and (min-width: 768px) {
    text-align: ${({ variant }) => (variant === 'lg' ? 'left' : 'center')};
    margin-top: ${({ variant }) => (variant === 'lg' ? '' : '32px')};
    margin-bottom: ${({ variant }) => (variant === 'lg' ? '' : '12px')};
  }
  width: 100%;
  grid-column: 2;
`

export const ModalBodyDiv = styled.div<ModalContentProps>`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff99;
  line-height: 24px;
  text-align: center;
  @media only screen and (min-width: 768px) {
    text-align: ${({ variant }) => (variant === 'lg' ? 'left' : 'center')};
    margin-top: ${({ variant }) => (variant === 'lg' ? '8px' : '')};
    margin-bottom: ${({ variant }) => (variant === 'lg' ? '8px' : '')};
  }
  width: 100%;
  grid-column: 2;
`

export const ModalFooterDiv = styled.div<ModalContentProps>`
  margin-top: 32px;
  @media only screen and (min-width: 768px) {
    margin-top: ${({ variant }) => (variant === 'lg' ? '' : '32px')};
    display: ${({ variant }) => (variant === 'lg' ? 'flex' : '')};
  }
  justify-content: end;
  align-items: end;
  width: 100%;
  grid-column: 2;
`
