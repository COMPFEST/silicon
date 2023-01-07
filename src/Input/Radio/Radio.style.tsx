import styled from 'styled-components'

export const StyledRadio = styled.input`
  /* Hide the Native Radio Input */
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  margin: 0;

  color: transparent;
  width: 0.85em;
  height: 0.85em;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  font-size: 16px;

  display: grid;
  place-content: center;

  ::before {
    content: '';
    width: 0.45em;
    height: 0.45em;
    border-radius: 50%;
    transform: scale(0);
    outline: 0.25em solid rgba(54, 67, 252, 1);
    transition: transform 120ms ease-in-out;
  }

  :enabled {
    :checked::before {
      background-color: white;
      transform: scale(1);
    }

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.6);
    }
  }

  :disabled {
    border: 1px solid rgba(255, 255, 255, 0.1);

    :checked {
      border: none;

      ::before {
        background-color: rgba(255, 255, 255, 0.8);
        outline: 0.25em solid rgba(255, 255, 255, 0.1);
        transform: scale(1);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const RadioLabel = styled.div`
  color: white;
  font-size: 16px;
  line-height: 18px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const RadioDiv = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  :hover > ${StyledRadio}:enabled {
    border: 1px solid rgba(255, 255, 255, 0.6);
  }

  & > ${StyledRadio}:disabled ~ * {
    color: rgba(255, 255, 255, 0.8);

    svg path {
      fill: currentColor;
    }
  }
`

export const SVGDiv = styled.div`
  display: flex;

  svg {
    width: 24px;
    height: 24px;
  }

  @media only screen and (max-width: 768px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`
