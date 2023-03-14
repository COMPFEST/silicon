import styled from 'styled-components'
import { StyledSelectProps, DropdownIconProps } from './interface'

export const StyledSelect = styled.div`
  position: absolute;
  top: 0;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
  width: 100%;
  color: white;
  font-size: 16px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const SelectedOption = styled.div<StyledSelectProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ optionHidden }) =>
    optionHidden ? 'transparent' : '#3E405B'};
  padding: 8px 12px;
`

export const Options = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const StyledOption = styled.li<StyledSelectProps>`
  padding: 8px 12px 8px 12px;
  background-color: ${({ optionHidden }) =>
    optionHidden ? 'transparent' : '#373951'};
`

export const SelectContainer = styled.div`
  position: relative;
  width: 300px;
`

export const Label = styled.div`
  color: white;
`

export const DropdownIconDiv = styled.div<DropdownIconProps>`
  transition: all 0.3s;
  transform: rotate(${({ isFlipped }) => (isFlipped ? '-180' : '0')}deg);
  display: flex;
  justify-content: center;
  align-items: center;
`
