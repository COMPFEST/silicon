import React from 'react'
import { OptionProps } from './interface'

const Option: React.FC<OptionProps> = ({
  children,
  value,
  isChecked,
  onClick,
  ...props
}) => {
  return (
    <label>
      <input
        type="radio"
        value={value}
        onChange={onClick}
        checked={isChecked}
        // style={{ display: 'none' }}
      />
      <span {...props}>{children}</span>
    </label>
  )
}

Option.displayName = 'Option'

export default Option
