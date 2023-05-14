import styled from 'styled-components'
import { StyledTabProps } from './interface'

export const StyledTab = styled.button<StyledTabProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px 32px;
  gap: 8px;
  border: none;
  border-radius: 12px;

  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  color: white;

  cursor: pointer;

  ${(props) =>
    !props.selected &&
    `
    background-color: transparent;

    :hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  `}

  ${(props) =>
    props.selected &&
    `
    background-image: linear-gradient(
      rgba(85, 97, 255, 1),
      rgba(54, 67, 252, 1),
      rgba(54, 67, 252, 1)
    );

    outline: 4px solid rgba(255, 255, 255, 0.1);

    color: white !important;
  `}
`
