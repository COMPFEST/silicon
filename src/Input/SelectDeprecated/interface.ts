import React from 'react'

export interface StyledSelectProps
  extends React.ComponentPropsWithoutRef<'input'> {
  optionHidden: boolean
}

export interface SelectInputProps
  extends React.ComponentPropsWithoutRef<'input'> {
  label?: string
  options: Record<string | number, string | number>
}

export interface StyledOptionProps {
  hidden: Boolean
}

export interface DropdownIconProps {
  isFlipped: Boolean
}
