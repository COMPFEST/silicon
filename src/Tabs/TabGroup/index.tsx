import React, { cloneElement, useState } from 'react'
import { TabGroupProps } from './interface'
import { TabDiv, TabGroupDiv } from './TabGroup.style'

const TabGroup: React.FC<TabGroupProps> = ({ children }) => {
  const [selected, setSelected] = useState(0)

  return (
    <>
      <TabGroupDiv>
        {children?.map((value, idx) => {
          return (
            <TabDiv onClick={() => setSelected(idx)} key={idx}>
              {cloneElement(value, {
                title: value.props.title,
                icon: value.props.icon,
                selected: selected === idx,
              })}
            </TabDiv>
          )
        })}
      </TabGroupDiv>
    </>
  )
}

export default TabGroup