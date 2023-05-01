import styled from 'styled-components'

export const StyledSelect = styled.select`
  border-radius: 12px;
  border: 2px solid rgba(168, 168, 168, 0.5);
  color: white;
  padding: 8px 12px;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
  transition: all 1000ms cubic-bezier(0.075, 0.82, 0.165, 1) 0ms;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }

  &:hover {
    border: 2px solid rgba(204, 229, 255, 1);
  }

  &:focus {
    outline: none;
    border: 2px solid rgba(204, 229, 255, 1);
  }

  & > option {
    color: white;
    background-color: #3e405b;
  }
`
