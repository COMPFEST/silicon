import React, { ReactNode } from 'react'

export interface RadioProps extends React.ComponentPropsWithoutRef<'input'> {
  icon?: ReactNode
  className?: string
}
