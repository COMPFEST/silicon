import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { RadioProps } from './interface'
import { RadioDiv, RadioLabel, StyledRadio, SVGDiv } from './Radio.style'

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, icon = null, ...props }, ref) => {
    const radioRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => radioRef.current as HTMLInputElement)

    return (
      <>
        <RadioDiv onClick={() => radioRef.current?.click()}>
          <StyledRadio ref={radioRef} type="radio" {...props}></StyledRadio>
          {icon && <SVGDiv>{icon}</SVGDiv>}
          <RadioLabel>{label}</RadioLabel>
        </RadioDiv>
      </>
    )
  }
)

Radio.displayName = 'Radio'

export default Radio
