import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { CheckboxProps } from './interface'
import { CheckboxDiv, StyledCheckbox, SVGDiv } from './Checkbox.style'

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ icon = null, ...props }, ref) => {
    const checkboxRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => checkboxRef.current as HTMLInputElement)

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
        </CheckboxDiv>
      </>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
