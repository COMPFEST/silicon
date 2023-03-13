import React, { forwardRef } from 'react'
import { SelectInputProps } from './interface'
import {
  Label,
  SelectContainer,
  StyledSelect,
  StyledOption,
} from './Select.style'

const SelectInput = forwardRef<HTMLInputElement, SelectInputProps>(
  ({ label, options, ...props }, ref) => {
    return (
      <SelectContainer>
        <Label>{label}</Label>
        <StyledSelect name="" id="">
          {Object.entries(options).map(([key, value]) => {
            return (
              <StyledOption key={key} value={value}>
                {key}
              </StyledOption>
            )
          })}
        </StyledSelect>
      </SelectContainer>
    )
  }
)

SelectInput.displayName = 'SelectInput'
export default SelectInput
