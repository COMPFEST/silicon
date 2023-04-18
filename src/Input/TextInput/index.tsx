import React, { ComponentPropsWithoutRef, forwardRef } from 'react'
import { TextInputProps } from './interface'
import {
  StyledTextInput,
  TextInputContainer,
  LabelDiv,
  BottomTextDiv,
  TextInputDiv,
} from './TextInput.style'

const TextInput = forwardRef<
  HTMLInputElement,
  TextInputProps & ComponentPropsWithoutRef<'input'>
>(
  (
    {
      label,
      helper,
      error,
      type = 'text',
      placeholder = 'Placeholder',
      leftIcon,
      rightIcon,
      labelClassName = '',
      inputDivClassName = '',
      inputClassName = '',
      ...props
    },
    ref
  ) => {
    return (
      <>
        <TextInputContainer>
          <LabelDiv className={labelClassName}>{label}</LabelDiv>

          <TextInputDiv isError={!!error} className={inputDivClassName}>
            {leftIcon}
            <StyledTextInput
              className={inputClassName}
              placeholder={placeholder}
              ref={ref}
              type={type}
              {...props}
            />
            {rightIcon}
          </TextInputDiv>

          {!error && helper && (
            <BottomTextDiv>
              <HelperIcon />
              {helper}
            </BottomTextDiv>
          )}

          {!!error && (
            <BottomTextDiv error>
              <ErrorIcon />
              {error}
            </BottomTextDiv>
          )}
        </TextInputContainer>
      </>
    )
  }
)

const HelperIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.988987"
      d="M9.99909 1.67842C5.39659 1.67842 1.66575 5.40926 1.66575 10.0118C1.66575 14.6143 5.39659 18.3451 9.99909 18.3451C14.6016 18.3451 18.3324 14.6143 18.3324 10.0118C18.3324 5.40926 14.6016 1.67842 9.99909 1.67842ZM9.99909 3.34509C13.6808 3.34509 16.6658 6.3301 16.6658 10.0118C16.6658 13.6935 13.6808 16.6785 9.99909 16.6785C6.31742 16.6785 3.33242 13.6935 3.33242 10.0118C3.33242 6.3301 6.31742 3.34509 9.99909 3.34509ZM9.99909 5.8451C9.53909 5.8451 9.16575 6.21843 9.16575 6.67843C9.16575 7.13843 9.53909 7.51177 9.99909 7.51177C10.4591 7.51177 10.8324 7.13843 10.8324 6.67843C10.8324 6.21843 10.4591 5.8451 9.99909 5.8451ZM9.16575 8.3451C8.70575 8.3451 8.33242 8.71844 8.33242 9.17844C8.33242 9.58011 8.6316 9.8801 9.0091 9.9601L8.51491 12.3551C8.32158 13.3226 9.01325 14.1785 9.99909 14.1785H10.8324C11.2924 14.1785 11.6658 13.8051 11.6658 13.3451C11.6658 12.8851 11.2924 12.5118 10.8324 12.5118H10.1816L10.8066 9.3351C10.9099 8.81926 10.5249 8.3451 9.99909 8.3451C9.89409 8.3451 9.30075 8.3451 9.16575 8.3451Z"
      fill="white"
      fillOpacity="0.8"
    />
  </svg>
)

const ErrorIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.0119 1.66576C8.62804 1.66659 7.58654 2.38909 6.7567 3.85326L2.61604 11.4316C1.97521 12.5491 1.67262 13.3349 1.67854 14.1658C1.69187 16.0258 3.1872 17.4924 5.01187 17.4991H15.0119C16.8388 17.4991 18.3383 16.0541 18.3452 14.1658C18.3482 13.3374 18.0222 12.5016 17.3817 11.4316L13.2931 3.90575C12.5258 2.43991 11.4146 1.66492 10.0119 1.66576ZM10.0119 3.33242C10.747 3.33242 11.3054 3.72492 11.8087 4.68659L15.9494 12.2649C16.4641 13.1258 16.6802 13.7124 16.6785 14.1658C16.675 15.1216 15.9344 15.8324 15.0119 15.8324H5.01187C4.0972 15.8291 3.35195 15.1058 3.3452 14.1658C3.34187 13.7024 3.5602 13.1357 4.07437 12.2391L8.18895 4.68659C8.7442 3.70659 9.28562 3.33242 10.0119 3.33242ZM10.0119 6.66576C9.55162 6.66576 9.17854 7.03909 9.17854 7.49909V10.8324C9.17854 11.2924 9.55162 11.6658 10.0119 11.6658C10.4721 11.6658 10.8452 11.2924 10.8452 10.8324V7.49909C10.8452 7.03909 10.4721 6.66576 10.0119 6.66576ZM10.0119 12.4991C9.55162 12.4991 9.17854 12.8724 9.17854 13.3324C9.17854 13.7924 9.55162 14.1658 10.0119 14.1658C10.4721 14.1658 10.8452 13.7924 10.8452 13.3324C10.8452 12.8724 10.4721 12.4991 10.0119 12.4991Z"
      fill="#FF7387"
    />
  </svg>
)

TextInput.displayName = 'TextInput'

export default TextInput
