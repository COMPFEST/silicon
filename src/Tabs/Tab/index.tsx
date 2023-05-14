import React from 'react'
import { TabProps } from './interface'
import { StyledTab } from './Tab.style'
import { useTabGroupContext } from '../TabGroup/TabGroupContext'

const Tab: React.FC<TabProps> = ({
  title,
  icon,
  index,
  onSelected,
  selectedClassName,
  unselectedClassName,
  className = '',
}) => {
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
      className={`${className} ${
        selectedIndex === index ? selectedClassName : unselectedClassName
      }`}
    >
      {icon}
      {title}
    </StyledTab>
  )
}

export default Tab
