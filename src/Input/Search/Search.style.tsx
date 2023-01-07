import styled from 'styled-components'
import { SearchInputProps } from './interface'

export const StyledSearchInput = styled.input<SearchInputProps>`
  background-color: transparent;
  color: rgba(255, 255, 255, 0.3);
  outline: none;
  border: none;
  caret-color: white;
  color: white;
  font-size: 16px;
  text-align: ${(props) => (props.align === 'left' ? 'left' : 'center')};

  :focus {
    ::placeholder {
      opacity: 0;
    }

    /* other browsers */
    ::-webkit-input-placeholder {
      opacity: 0;
    }
    :-moz-placeholder {
      /* Firefox 18- */
      opacity: 0;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      opacity: 0;
    }
    :-ms-input-placeholder {
      opacity: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const SearchIconDiv = styled.div<{ hidden: boolean }>`
  display: flex;
  flex-direction: column;
  justify-items: center;
  visibility: ${(props) => (props.hidden ? 'hidden' : 'visible')};
  opacity: 0.3;

  @media only screen and (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`

export const SearchDiv = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 16px 8px 16px;

  :hover {
    background: rgba(255, 255, 255, 0.1);

    & > * {
      opacity: 1;
    }

    & > ${StyledSearchInput}::placeholder {
      color: white;
    }

    /* other browsers */
    & > ${StyledSearchInput}::-webkit-input-placeholder {
      color: white;
    }
    & > ${StyledSearchInput}:-moz-placeholder {
      /* Firefox 18- */
      color: white;
    }
    & > ${StyledSearchInput}::-moz-placeholder {
      /* Firefox 19+ */
      color: white;
    }
    & > ${StyledSearchInput}:-ms-input-placeholder {
      color: white;
    }

    @media only screen and (max-width: 768px) {
      padding: 8px 12px 8px 12px;
    }
  }

  :focus-within {
    & > ${SearchIconDiv} {
      opacity: 1;
    }
  }
`
