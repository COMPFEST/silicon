import styled from 'styled-components'

export const SelectedChip = styled.div`
  font-family: 'Inter', sans-serif;
  background-color: #4ec1f3;
  border: 3px solid #0aa4e7;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.75rem;
  border-radius: 5rem;
  gap: 0.25rem;

  &:hover {
    cursor: pointer;
  }
`

export const UnselectedChip = styled(SelectedChip)`
  background-color: transparent;
  border-color: #ffffff;
  color: #ffffff;
  font-weight: 500;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    background-color: rgba(255, 255, 255, 0.1);
  }
`
