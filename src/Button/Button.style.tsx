import styled from 'styled-components'
import { VARIANTS } from './constants'
import { StyledButtonProps } from './interface'

export const StyledButton = styled.button<
  StyledButtonProps & React.ComponentPropsWithoutRef<'button'>
>`
  border-radius: 12px;
  outline: none;
  border: none;
  padding: 12px 32px;
  color: white;
  box-shadow: none;
  font-weight: 600;
  font-size: ${({ size }) => (size === 'regular' ? '16px' : '12px')};
  transition: all 1000ms cubic-bezier(0.075, 0.82, 0.165, 1) 0ms;
  display: flex;
  align-items: center;
  gap: 12px;
  ${({ variant }) => VARIANTS[variant]};
  @media only screen and (max-width: 768px) {
    font-size: ${({ size }) => (size === 'regular' ? '12px' : '10px')};
    padding: 10px 24px;
  }
`
export const StyledLoadingIcon = styled.div`
  -webkit-animation-name: spin;
  -webkit-animation-duration: 1500ms;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: spin;
  -moz-animation-duration: 1500ms;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -ms-animation-name: spin;
  -ms-animation-duration: 1500ms;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;

  animation-name: spin;
  animation-duration: 1500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
