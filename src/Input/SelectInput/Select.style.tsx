import styled from 'styled-components'

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

export const Label = styled.div`
  color: white;
  margin-bottom: 2px;
`
