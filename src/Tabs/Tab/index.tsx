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
        if (selectedIndex !== index && onSelected && index !== undefined) {
          setSelectedIndex(index)
          onSelected()
        }
      }}
    >
      {icon}
      {title}
    </StyledTab>
  )
}

export default Tab
