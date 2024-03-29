import React from 'react'
import { StyledButton, StyledLoadingIcon } from './Button.style'
import { ButtonProps } from './interface'

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<
  ButtonProps & React.ComponentPropsWithoutRef<'button'>
> = ({
  variant = 'primary',
  size = 'regular',
  disabled = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <StyledLoadingIcon>
          <LoadingIcon />
        </StyledLoadingIcon>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </StyledButton>
  )
}

const LoadingIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.8333 7.58228C19.6974 7.02366 19.9559 5.85486 19.2469 5.10922C18.3412 4.15679 17.2524 3.38769 16.039 2.85195C14.2544 2.06403 12.2783 1.8153 10.3541 2.13638C8.4299 2.45746 6.64164 3.33434 5.20957 4.65902C3.77749 5.98369 2.76414 7.69831 2.29433 9.59168C1.82452 11.4851 1.91876 13.4745 2.56545 15.315C3.21213 17.1555 4.38303 18.7666 5.93391 19.95C7.48479 21.1334 9.34793 21.8373 11.2939 21.975C12.617 22.0687 13.9391 21.8978 15.1849 21.4793C16.1602 21.1516 16.4781 19.9975 15.9754 19.0997C15.4727 18.202 14.3348 17.9135 13.3293 18.1315C12.7505 18.257 12.1539 18.3005 11.557 18.2583C10.3361 18.1718 9.16719 17.7302 8.19417 16.9878C7.22116 16.2453 6.48655 15.2345 6.08083 14.0798C5.6751 12.9251 5.61597 11.6769 5.91073 10.489C6.20549 9.30115 6.84126 8.22541 7.73973 7.39432C8.6382 6.56323 9.76014 6.01308 10.9674 5.81163C12.1746 5.61019 13.4144 5.76624 14.534 6.26058C15.0815 6.50229 15.5885 6.81971 16.0415 7.20117C16.8285 7.86397 17.9692 8.14091 18.8333 7.58228Z"
      fill="white"
    />
  </svg>
)

export default Button
