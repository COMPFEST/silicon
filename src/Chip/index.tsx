import { ChipProps } from './interface'
import { useState } from 'react'
import React from 'react'
import { SelectedChip, UnselectedChip } from './Chip.style'

const Chip: React.FC<ChipProps & React.ComponentPropsWithoutRef<'div'>> = ({
  isSelected = false,
  onClick = null,
  showLeftIcon = false,
  leftIcon = null,
  children,
  disabled = false,
  variant = 'default',
  ...props
}) => {
  const [selected, setSelected] = useState(isSelected)

  if (selected)
    return (
      <SelectedChip
        onClick={() => {
          setSelected(!selected)
          if (onClick != null) onClick()
        }}
        variant={variant}
      >
        {showLeftIcon && leftIcon}
        {children}
      </SelectedChip>
    )
  return (
    <UnselectedChip
      onClick={() => {
        if (disabled) return
        setSelected(!selected)
        if (onClick != null) onClick()
      }}
      variant={variant}
      disabled={disabled}
      {...props}
    >
      {showLeftIcon && leftIcon}
      {children}
    </UnselectedChip>
  )
}

export default Chip
