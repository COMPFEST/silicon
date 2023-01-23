import { TooltipsProps } from './interface'
import React, { useState } from 'react'
import { useRef } from 'react'

import {
  TooltipsContainer,
  TooltipsSpanBot,
  TooltipsSpanTop,
} from './Tooltips.style'

const Tooltips: React.FC<TooltipsProps> = ({ id, text = '', children }) => {
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
        const { top } = container.current.getBoundingClientRect()
        const { height } = container.current.getBoundingClientRect()
        const tooltipHeight = tooltipRef.current.getBoundingClientRect().height
        if (windowHeight - (top + height + tooltipHeight) < 5) {
          tooltipRef.current.style.bottom = height + 25 + 'px'
          setPosition(false)
        } else {
          tooltipRef.current.style.top = height + 25 + 'px'
        }
      }}
      onMouseLeave={() => {
        if (!tooltipRef.current || !container.current) return
        tooltipRef.current.style.visibility = 'hidden'
      }}
    >
      <>{children}</>

      {position ? (
        <TooltipsSpanBot ref={tooltipRef}>{text}</TooltipsSpanBot>
      ) : (
        <TooltipsSpanTop ref={tooltipRef}>{text}</TooltipsSpanTop>
      )}
    </TooltipsContainer>
  )
}

export default Tooltips
