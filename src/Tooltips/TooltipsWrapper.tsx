import Tooltips from '.'
import React from 'react'
import { TooltipsProps } from './interface'
import { Tester, Tester2 } from './Tooltips.style'

const TooltipsWrapper: React.FC<TooltipsProps> = ({ text = '' }) => {
  return (
    <div>
      <Tester>
        <Tooltips id='test' text={text}>
          <p>Arrange ur Mouse Here :D</p>
        </Tooltips>
      </Tester>
      <Tester2>
        <Tooltips id='test2' text={text}>
          <p>Arrange ur Mouse Here :D</p>
        </Tooltips>
      </Tester2>
    </div>
  )
}

export default TooltipsWrapper
