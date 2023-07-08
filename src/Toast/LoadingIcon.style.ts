import styled from 'styled-components'

export const StyledLoadingIcon = styled.div`
  width: 24;
  height: 24;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
