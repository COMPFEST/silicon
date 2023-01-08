import styled from 'styled-components'
import { StyledDropdownProps } from './interface'

export const DropdownContainer = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`
export const DropdownHeaderContainer = styled.div<StyledDropdownProps>`
  border-radius: ${(props) => (props.isActive ? '10px 10px 0px 0px' : '10px')};
  border-style: ${(props) => (props.isActive ? 'solid' : 'none')};
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
  border-style: ${(props) => (props.isActive ? 'none' : 'solid')};
  border-color: rgba(255, 255, 255, 0.3);
  background-color: ${(props) =>
    props.isActive ? 'rgba(79, 82, 117, 1)' : 'rgba(62, 64, 91, 0)'};
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
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
  border-radius: ${(props) => (props.isActive ? '0px 0px 10px 10px' : '10px')};
  border-style: solid;
  border-top: 0px;
  border-color: rgba(255, 255, 255, 0.3);
  background-color: rgba(62, 64, 91, 1);
  width: inherit;
`
export const DropdownItemContainer = styled.div<StyledDropdownProps>`
  padding: 18px 10px 18px 10px;
  display: flex;
  text-align: left;
  align-items: center;
  width: 388px;
  height: 100%;
  border-radius: ${(props) => (props.isActive ? '0px' : '0px')};
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`
export const DropdownItem = styled.div`
  display: flex;
  width: inherit;
  align-items: center;
  gap: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: inherit;
`
export const IconContainer = styled.div`
  display: flex;
`
