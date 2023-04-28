import React, { cloneElement } from 'react'
import { TabGroupProps } from './interface'
import { TabGroupDiv } from './TabGroup.style'
import { TabGroupProvider } from './TabGroupContext'

const TabGroup: React.FC<TabGroupProps> = ({ children }) => {
  return (
    <TabGroupDiv>
      <TabGroupProvider>
        {children?.map((value, idx) => {
          return cloneElement(value, {
            title: value.props.title,
            icon: value.props.icon,
            index: idx,
            onSelected: value.props.onSelected,
          })
        })}
      </TabGroupProvider>
    </TabGroupDiv>
  )
}

export default TabGroup
