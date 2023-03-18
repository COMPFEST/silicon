import React from 'react'

export interface StyledSelectProps
  extends React.ComponentPropsWithoutRef<'input'> {
  optionHidden: boolean
}

export interface SelectInputProps
  extends React.ComponentPropsWithoutRef<'select'> {
  label?: string
}
