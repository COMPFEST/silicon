import React, { ComponentPropsWithoutRef, forwardRef } from 'react'
import { TextInputProps } from './interface'
import { StyledTextInput, TextInputDiv } from './TextInput.style'

const TextInput = forwardRef<
  HTMLInputElement,
  TextInputProps & ComponentPropsWithoutRef<'input'>
>(
  (
    {
      error,
      type = 'text',
      placeholder = 'Placeholder',
      leftIcon,
      rightIcon,
      inputClassName = '',
      ...props
    },
    ref
  ) => {
    return (
      <>
        <TextInputDiv isError={!!error}>
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
      </>
    )
  }
)

TextInput.displayName = 'TextInput'

export default TextInput
