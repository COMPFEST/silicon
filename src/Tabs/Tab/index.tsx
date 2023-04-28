import React from 'react'
import { TabProps } from './interface'
import { StyledTab } from './Tab.style'
import { useTabGroupContext } from '../TabGroup/TabGroupContext'

const Tab: React.FC<TabProps> = ({ title, icon, index, onSelected }) => {
  const { selectedIndex, setSelectedIndex } = useTabGroupContext()

  return (
    <StyledTab
      selected={selectedIndex === index}
      onClick={() => {
        if (selectedIndex !== index && index !== undefined) {
          setSelectedIndex(index)
          if (onSelected) {
            onSelected()
          }
        }
      }}
    >
      {icon}
      {title}
    </StyledTab>
  )
}

export default Tab
