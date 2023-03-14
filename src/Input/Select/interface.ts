import React from 'react'

export interface SelectProps {
  children: React.ReactNode
  value: any
  onChange: React.Dispatch<React.SetStateAction<any>>
}
