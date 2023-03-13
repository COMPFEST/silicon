import styled from 'styled-components'
import { StyledSelectProps } from './interface'

export const StyledSelect = styled.select<StyledSelectProps>`
  display: flex;
  border-radius: 12px;
  background-color: #3e405b;
  width: 300px;
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 8px 12px 8px 12px;
  font-size: 16px;

  &:focus {
    outline: none;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const StyledOption = styled.option`
  background-color: #373951;
`

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 16px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const Label = styled.div`
  color: white;
`
