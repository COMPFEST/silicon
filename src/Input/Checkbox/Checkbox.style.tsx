import styled from 'styled-components'

export const StyledCheckbox = styled.input`
  /* Hide the Native Checkbox Input */
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  margin: 0;

  color: transparent;
  width: 16px;
  height: 16px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 4px;

  display: grid;
  place-content: center;

  ::before {
    content: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.75386 1.50554C10.082 1.16113 10.082 0.602723 9.75386 0.25831C9.42568 -0.0861033 8.89358 -0.0861032 8.5654 0.25831L3.2173 5.87084L1.4346 4C1.10642 3.65559 0.574325 3.65559 0.246139 4C-0.0820464 4.34441 -0.0820464 4.90282 0.246139 5.24723L2.62307 7.74169C2.95126 8.0861 3.48335 8.0861 3.81153 7.74169L9.75386 1.50554Z' fill='white'/%3E%3C/svg%3E%0A");
    width: 0.45em;
    height: 0.45em;
    transform: scale(0);
    transition: transform 120ms ease-in-out;
  }

  :enabled {
    :checked {
      background-image: linear-gradient(
        rgba(85, 97, 255, 1),
        rgba(54, 67, 252, 1),
        rgba(54, 67, 252, 1)
      );
      border: none;

      ::before {
        transform: scale(1);
      }
    }

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.6);
      cursor: pointer;
    }
  }

  :disabled {
    border: 1px solid rgba(255, 255, 255, 0.1);
    cursor: not-allowed;

    :checked {
      background-color: rgba(255, 255, 255, 0.1);
      border: none;

      ::before {
        transform: scale(1);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    width: 12px;
    height: 12px;

    ::before {
      content: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.75386 1.50554C10.082 1.16113 10.082 0.602723 9.75386 0.25831C9.42568 -0.0861033 8.89358 -0.0861032 8.5654 0.25831L3.2173 5.87084L1.4346 4C1.10642 3.65559 0.574325 3.65559 0.246139 4C-0.0820464 4.34441 -0.0820464 4.90282 0.246139 5.24723L2.62307 7.74169C2.95126 8.0861 3.48335 8.0861 3.81153 7.74169L9.75386 1.50554Z' fill='white'/%3E%3C/svg%3E%0A");
    }
  }
`

export const CheckboxLabel = styled.div`
  color: white;
  font-size: 16px;
  line-height: 18px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const CheckboxDiv = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  :hover {
    cursor: pointer;

    :has(${StyledCheckbox}:disabled) {
      cursor: not-allowed;
    }
  
    > ${StyledCheckbox}:enabled {
      border: 1px solid rgba(255, 255, 255, 0.6);
    }
  }

  & > ${StyledCheckbox}:disabled ~ * {
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
