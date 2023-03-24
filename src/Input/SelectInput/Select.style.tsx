import styled from 'styled-components'

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 16px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const StyledSelect = styled.select`
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 8px 12px;
  background-color: transparent;
  font-size: 16px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }

  & > option {
    color: white;
    background-color: #3e405b;
  }
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: white;
  margin-bottom: 2px;
`
