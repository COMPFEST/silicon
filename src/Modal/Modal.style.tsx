import styled from 'styled-components'
import { ModalContentProps, ModalProps } from './interface'

export const ModalDiv = styled.div<ModalProps>`
  display: ${({ isDisplayed }) => (isDisplayed ? 'block' : 'none')};
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
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
  @media only screen and (max-width: 768px) {
    padding: 20px;
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
  padding: 60px;
  padding-bottom: 40px;
  border-radius: 24px;
  z-index: 999;

  &::-webkit-scrollbar {
    background-color: #343653;
    width: 0.75em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(165, 165, 165, 0.75);
    border-radius: 12px;
    &:hover {
      background-color: rgba(165, 165, 165, 0.85);
    }
    &:active {
      background-color: rgba(165, 165, 165, 1);
    }
  }
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

export const CloseButtonWrapper = styled.div`
  position: absolute;
  top: -30px;
  right: -30px;
`

export const ModalImageDiv = styled.div<ModalContentProps>`
  margin-bottom: 32px;
  margin-inline: auto;
  width: fit-content;
  height: fit-content;
  max-width: 250px;
  max-height: 250px;
  @media only screen and (min-width: 768px) {
    margin-right: ${({ variant }) => (variant === 'lg' ? '24px' : '')};
    margin-bottom: ${({ variant }) => (variant === 'lg' ? '0' : '32px')};
  }
  grid-row: 2/5;
`

export const ModalHeaderDiv = styled.div<ModalContentProps>`
  font-size: 32px;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 12px;
  @media only screen and (min-width: 768px) {
    text-align: ${({ variant }) => (variant === 'lg' ? 'left' : 'center')};
    margin-bottom: ${({ variant }) => (variant === 'lg' ? '0' : '12px')};
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
    margin-top: ${({ variant }) => (variant === 'lg' ? '8px' : '0')};
    margin-bottom: ${({ variant }) => (variant === 'lg' ? '8px' : '0')};
  }
  width: 100%;
  grid-column: 2;
`

export const ModalFooterDiv = styled.div<ModalContentProps>`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: end;
  width: 100%;
  grid-column: 2;
  @media only screen and (min-width: 768px) {
    margin-top: ${({ variant }) => (variant === 'lg' ? '0' : '32px')};
    justify-content: ${({ variant }) => (variant === 'lg' ? 'end' : 'center')};
    -webkit-justify-content: ${({ variant }) =>
      variant === 'lg' ? 'flex-end' : ''};
  }
`
