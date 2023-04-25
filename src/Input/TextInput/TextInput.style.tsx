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

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 16px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const TextInputDiv = styled.div<StyledTextInputProps>`
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 12px;
  background-color: transparent;
  color: white;
  border: 2px solid
    ${(props) =>
      props.isError ? 'rgba(255, 115, 135, 1)' : 'rgba(255, 255, 255, 0.3)'};

  padding: 8px 12px 8px 12px;
  font-size: 16px;

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const BottomTextDiv = styled.div<{
  error?: boolean
}>`
  color: rgba(255, 255, 255, 0.8);
  color: ${(props) =>
    props.error ? 'rgba(255, 115, 135, 1)' : 'rgba(255, 255, 255, 0.8)'};
  display: flex;
  align-items: center;
  gap: 4px;
`
