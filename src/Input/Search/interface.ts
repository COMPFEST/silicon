import React from 'react'

export interface SearchInputProps
  extends React.ComponentPropsWithoutRef<'input'> {
  align?: 'left' | 'center'
  icon?: 'none' | 'left' | 'right'
}

export interface SearchIconProps {
  hidden?: boolean
}
