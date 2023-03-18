import React from 'react'
import { TabProps } from './interface'
import { StyledTab } from './Tab.style'

const Tab: React.FC<TabProps> = ({ title, icon, selected = false }) => {
  return (
    <>
      <StyledTab selected={selected}>
        {icon}
        {title}
      </StyledTab>
    </>
  )
}

export default Tab
