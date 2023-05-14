import styled from 'styled-components'
import { ChipProps } from './interface'

export const SelectedChip = styled.div<ChipProps>`
  background-color: ${({ variant }) => {
    switch (variant) {
      case 'success':
        return '#32D4AA'
      case 'danger':
        return '#EF586E'
      case 'warning':
        return '#EEA02B'
      default:
        return '#4ec1f3'
    }
  }};
  border: 2px solid #0aa4e7;
  border-color: ${({ variant }) => {
    switch (variant) {
      case 'success':
        return '#32D4AA'
      case 'danger':
        return '#EF586E'
      case 'warning':
        return '#EEA02B'
      default:
        return '#0aa4e7'
    }
  }};
  font-weight: 500;
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

export const UnselectedChip = styled(SelectedChip)<ChipProps>`
  background-color: transparent;
  border-color: ${({ variant }) => {
    switch (variant) {
      case 'success':
        return '#32D4AA'
      case 'danger':
        return '#EF586E'
      case 'warning':
        return '#EEA02B'
      default:
        return '#FFFFFF'
    }
  }};
  color: ${({ variant }) => {
    switch (variant) {
      case 'success':
        return '#32D4AA'
      case 'danger':
        return '#EF586E'
      case 'warning':
        return '#EEA02B'
      default:
        return '#FFFFFF'
    }
  }};

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? 'transparent' : 'rgba(255, 255, 255, 0.1)'};
  }

  &:focus {
    background-color: ${({ disabled }) =>
      disabled ? 'transparent' : 'rgba(255, 255, 255, 0.1)'};
  }
`
