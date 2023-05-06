import styled from 'styled-components'

export const StyledRadio = styled.input`
  /* Hide the Native Radio Input */
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  margin: 0;

  color: transparent;
  width: 16px;
  height: 16px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;

  display: grid;
  place-content: center;

  ::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transform: scale(0);
    outline: 4px solid rgba(54, 67, 252, 1);
    transition: transform 120ms ease-in-out;
  }

  :enabled {
    :checked::before {
      background-color: white;
      transform: scale(1);
    }

    :hover {
      cursor: pointer;
      border: 1px solid rgba(255, 255, 255, 0.6);
    }
  }

  :disabled {
    border: 1px solid rgba(255, 255, 255, 0.1);
    cursor: not-allowed;

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
    width: 12px;
    height: 12px;

    ::before {
      width: 6px;
      height: 6px;
      outline: 4px solid rgba(54, 67, 252, 1);
    }
  }
`

export const RadioDiv = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  :hover {
    cursor: pointer;

    :has(${StyledRadio}:disabled) {
      cursor: not-allowed;
    }

    > ${StyledRadio}:enabled {
      border: 1px solid rgba(255, 255, 255, 0.6);
    }
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
