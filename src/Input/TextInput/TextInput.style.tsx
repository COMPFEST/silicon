import styled from 'styled-components'
import { StyledTextInputProps } from './interface'

export const StyledTextInput = styled.input`
  display: flex;
  background-color: transparent;
  color: white;
  border: none;
  font-size: 16px;
  width: 100%;

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

export const TextInputDiv = styled.div<StyledTextInputProps>`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 12px;
  background-color: transparent;
  color: white;
  border: 2px solid
    ${(props) =>
      props.isError ? 'rgba(255, 115, 135, 1)' : 'rgba(168, 168, 168, 0.5)'};
  transition: all 1000ms cubic-bezier(0.075, 0.82, 0.165, 1) 0ms;
  padding: 8px 12px 8px 12px;
  font-size: 16px;

  &:hover {
    border: 2px solid rgba(204, 229, 255, 1);
  }

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`
