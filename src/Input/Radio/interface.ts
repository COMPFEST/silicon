import React, { ReactNode } from 'react'

export interface RadioProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string
  icon?: ReactNode
  labelClassName?: string
  radioClassName?: string
}
