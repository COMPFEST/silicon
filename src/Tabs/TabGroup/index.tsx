import React, { cloneElement } from 'react'
import { TabGroupProps } from './interface'
import { TabGroupDiv } from './TabGroup.style'
import { TabGroupProvider } from './TabGroupContext'

const TabGroup: React.FC<
  TabGroupProps & React.ComponentPropsWithoutRef<'div'>
> = ({ initialSelectedIndex, children, ...props }) => {
  return (
    <TabGroupDiv {...props}>
      <TabGroupProvider initialSelectedIndex={initialSelectedIndex}>
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
