import React from 'react'
import { TabProps } from './interface'
import { StyledTab } from './Tab.style'
import { useTabGroupContext } from '../TabGroup/TabGroupContext'

const Tab: React.FC<TabProps & React.ComponentPropsWithoutRef<'button'>> = ({
  title,
  icon,
  index,
  onSelected,
  selectedClassName,
  unselectedClassName,
  className = '',
  disabled = false,
}) => {
  const { selectedIndex, setSelectedIndex } = useTabGroupContext()

  return (
    <StyledTab
      type="button"
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
      disabled={disabled}
    >
      {icon}
      {title}
    </StyledTab>
  )
}

export default Tab
