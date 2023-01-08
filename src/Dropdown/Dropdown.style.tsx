import styled from 'styled-components'
import { StyledDropdownProps } from './interface'

export const Container = styled.div<StyledDropdownProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-style: ${(props) => (props.isActive ? 'solid' : 'none')};
  border-color: rgba(255, 255, 255, 0.4);
`

export const DropdownContainer = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`
export const DropdownHeaderContainer = styled.div<StyledDropdownProps>`
  border-radius: ${(props) => (props.isActive ? '8px 8px 0px 0px' : '8px')};
  border-style: ${(props) => (props.isActive ? 'solid' : 'none')};
  border-bottom: 0px;
  border-color: rgba(255, 255, 255, 0.4);
  background-color: rgba(62, 64, 91, 0.8);
`
export const DropdownHeader = styled.div<StyledDropdownProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px 16px 20px;
  border-radius: 8px;
  width: 388px;
  height: 44px;
  overflow: hidden;
  text-overflow: truncate;
  border-style: ${(props) => (props.isActive ? 'none' : 'solid')};
  border-color: rgba(255, 255, 255, 0.4);
  background-color: ${(props) =>
    props.isActive ? 'rgba(62, 64, 91, 1)' : 'rgba(62, 64, 91, 0.9)'};
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`
export const DropdownContent = styled.div<StyledDropdownProps>`
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  border-radius: ${(props) => (props.isActive ? '0px 0px 8px 8px' : '8px')};
  border-style: solid;
  border-top: 0px;
  border-color: rgba(255, 255, 255, 0.4);
  background-color: rgba(62, 64, 91, 0.8);
  width: inherit;
`
export const DropdownItemContainer = styled.div<StyledDropdownProps>`
  padding: 16px 20px 16px 20px;
  display: flex;
  text-align: left;
  overflow-wrap: break-word;
  width: 388px;
  height: 100%;
  border-radius: ${(props) => (props.isActive ? '0px 0px 8px 8px' : '8px')};
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`
export const DropdownItem = styled.div`
  display: flex;
`
