import React, { useRef } from 'react'
import { RadioProps } from './interface'
import { RadioDiv, RadioLabel, StyledRadio, SVGDiv } from './Radio.style'

const Radio: React.FC<RadioProps> = ({
  label,
  icon = null,
  ...props
}) => {
  const radioRef = useRef<HTMLInputElement>(null)

  return <>
    <RadioDiv onClick={() => radioRef.current?.click()}>
      <StyledRadio ref={radioRef} type='radio' {...props} ></StyledRadio>
      {icon && 
        <SVGDiv>
          {icon}
        </SVGDiv>
      }
      <RadioLabel>{label}</RadioLabel>
    </RadioDiv>
  </>
}

export default Radio