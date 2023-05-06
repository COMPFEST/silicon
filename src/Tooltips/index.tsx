import { TooltipsProps } from './interface'
import React, { ComponentPropsWithoutRef, useState } from 'react'
import { useRef } from 'react'

import {
  TooltipsContainer,
  TooltipsSpanBot,
  TooltipsSpanTop,
} from './Tooltips.style'

const Tooltips: React.FC<TooltipsProps & ComponentPropsWithoutRef<'span'>> = ({
  id,
  text = '',
  children,
  ...props
}) => {
  const tooltipRef = useRef<HTMLSpanElement>(null)
  const container = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(true)

  return (
    <TooltipsContainer
      ref={container}
      onMouseEnter={() => {
        if (!tooltipRef.current || !container.current) return
        const windowHeight = window.innerHeight
        tooltipRef.current.style.visibility = 'visible'
        const { bottom } = container.current.getBoundingClientRect()
        const { height } = container.current.getBoundingClientRect()
        const tooltipHeight = tooltipRef.current.getBoundingClientRect().height

        if (windowHeight - (bottom + height + tooltipHeight) < 25) {
          tooltipRef.current.style.bottom = height + 25 + 'px'
          setPosition(false)
        } else {
          setPosition(true)
        }
      }}
      onMouseLeave={() => {
        if (!tooltipRef.current || !container.current) return
        tooltipRef.current.style.visibility = 'hidden'
      }}
    >
      <>{children}</>

      {position == true ? (
        <TooltipsSpanBot {...props} ref={tooltipRef}>
          {text}
        </TooltipsSpanBot>
      ) : (
        <TooltipsSpanTop {...props} ref={tooltipRef}>
          {text}
        </TooltipsSpanTop>
      )}
    </TooltipsContainer>
  )
}

export default Tooltips
