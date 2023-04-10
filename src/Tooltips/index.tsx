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
        const { bottom } = container.current.getBoundingClientRect()
        const { height } = container.current.getBoundingClientRect()
        const tooltipHeight = tooltipRef.current.getBoundingClientRect().height

        if (windowHeight - (bottom + height + tooltipHeight) < 25) {
          tooltipRef.current.style.bottom = height + 25 + 'px'
          setPosition(false)
        } else {
          tooltipRef.current.style.top = height + window.scrollY + 25 + 'px'
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
        <TooltipsSpanBot ref={tooltipRef}>{text}</TooltipsSpanBot>
      ) : (
        <TooltipsSpanTop ref={tooltipRef}>{text}</TooltipsSpanTop>
      )}
    </TooltipsContainer>
  )
}

export default Tooltips
