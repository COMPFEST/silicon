import styled from 'styled-components'
import { StyledDropdownProps } from './interface'

export const DropdownContainer = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`
export const DropdownHeaderContainer = styled.div<StyledDropdownProps>`
  border-radius: ${(props) => (props.isActive ? '12px 12px 0px 0px' : '12px')};
  border: ${(props) => (props.isActive ? '2px solid' : 'none')};
  border-bottom: 0px;
  border-color: rgba(255, 255, 255, 0.3);
  background-color: ${(props) =>
    props.isActive ? 'rgba(62, 64, 91, 1)' : 'rgba(62, 64, 91, 0)'};
`
export const DropdownHeader = styled.div<StyledDropdownProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 10px 18px 10px;
  border-radius: 10px;
  width: 388px;
  height: 44px;
  overflow: hidden;
  text-overflow: truncate;
  border: ${(props) => (props.isActive ? 'none' : '2px solid')};
  border-color: rgba(255, 255, 255, 0.3);
  background-color: ${(props) =>
    props.isActive ? 'rgba(79, 82, 117, 1)' : 'rgba(62, 64, 91, 0)'};
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media only screen and (max-width: 768px) {
    width: 328px;
    height: 38px;
  }
`
export const DropdownContent = styled.div<StyledDropdownProps>`
  position: absolute;
  font-size: 16px;
  top: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  border-radius: ${(props) => (props.isActive ? '0px 0px 12px 12px' : '12px')};
  border: 2px solid;
  border-top: 0px;
  border-color: rgba(255, 255, 255, 0.3);
  background-color: rgba(62, 64, 91, 1);
  width: inherit;
  overflow: hidden;

  @keyframes in-transition {
    0% {
      max-height: 0;
    }
    100% {
      max-height: 999px;
    }
  }

  animation: in-transition 1.5s;
  animation-fill-mode: forwards;
`
export const DropdownItemContainer = styled.div<StyledDropdownProps>`
  display: flex;
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`
export const StyledDropdownButtonItem = styled.div`
  padding: 18px 10px 18px 10px;
  display: flex;
  text-align: left;
  align-items: center;
  gap: 8px;
  overflow: hidden;
  word-break: break-word;
  width: 388px;
  height: inherit;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    gap: 4px;
    width: 328px;
  }
`

export const StyledDropdownLinkItem = styled(StyledDropdownButtonItem)`
  color: #ffffff;
  text-decoration: none;
`

export const Text = styled.div`
  max-width: 270px;
`
export const IconContainer = styled.div`
  display: flex;
`
