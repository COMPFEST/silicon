import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { SelectInputProps } from './interface'
import { StyledSelect } from './Select.style'

const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  ({ children, ...props }, ref) => {
    const inputRef = useRef<HTMLSelectElement>(null)
    useImperativeHandle(ref, () => inputRef.current as HTMLSelectElement)

    return (
      <StyledSelect ref={inputRef} {...props}>
        {children}
      </StyledSelect>
    )
  }
)

SelectInput.displayName = 'SelectInput'
export default SelectInput
