import React, { useRef } from 'react'
import { CheckboxProps } from './interface'
import {
  CheckboxDiv,
  CheckboxLabel,
  StyledCheckbox,
  SVGDiv,
} from './Checkbox.style'

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  icon = null,
  ...props
}) => {
  const checkboxRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <CheckboxDiv onClick={() => checkboxRef.current?.click()}>
        <StyledCheckbox
          ref={checkboxRef}
          type="checkbox"
          {...props}
          onClick={(e) => e.stopPropagation()}
        ></StyledCheckbox>
        {icon && <SVGDiv>{icon}</SVGDiv>}
        <CheckboxLabel>{label}</CheckboxLabel>
      </CheckboxDiv>
    </>
  )
}

export default Checkbox
