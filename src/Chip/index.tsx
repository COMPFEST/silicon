import { ChipProps } from './interface'
import { useState } from 'react'
import React from 'react'
import { SelectedChip, UnselectedChip } from './Chip.style'

const Chip: React.FC<ChipProps> = ({
  isSelected = false,
  onClick = null,
  leftIcon,
  children,
}) => {
  const [selected, setSelected] = useState(isSelected)

  if (selected)
    return (
      <SelectedChip
        onClick={() => {
          setSelected(!selected)
          if (onClick != null) onClick()
        }}
      >
        {leftIcon}
        {children}
      </SelectedChip>
    )
  return (
    <UnselectedChip
      onClick={() => {
        setSelected(!selected)
        if (onClick != null) onClick()
      }}
    >
      {leftIcon}
      {children}
    </UnselectedChip>
  )
}

export default Chip
