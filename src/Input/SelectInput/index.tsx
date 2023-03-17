import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { SelectInputProps } from './interface'
import { Label, StyledSelect } from './Select.style'

const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  ({ label, children, ...props }, ref) => {
    const inputRef = useRef<HTMLSelectElement>(null)
    useImperativeHandle(ref, () => inputRef.current as HTMLSelectElement)

    return (
      <>
        <Label onClick={() => inputRef.current?.focus()}>{label}</Label>
        <StyledSelect ref={inputRef} {...props}>
          {children}
        </StyledSelect>
      </>
    )
  }
)

SelectInput.displayName = 'SelectInput'
export default SelectInput
