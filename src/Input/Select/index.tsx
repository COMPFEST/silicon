import React from 'react'
import { OptionProps } from '../Option/interface'
import { SelectProps } from './interface'
// import { SelectDiv, StyledSelect, Option, SVGDiv } from './Select.style'

const Select: React.FC<SelectProps> = ({ children, value, onChange }) => {
  const handleOptionClick = (value: string | number) => {
    console.log(value)
    onChange(value)
  }

  const renderChildren = React.Children.map(children, (child) => {
    if (React.isValidElement<OptionProps>(child)) {
      return React.cloneElement(child, {
        onClick: () => handleOptionClick(child.props.value),
        isChecked: child.props.value === value,
      })
    }

    return child
  })

  return (
    <div>
      <div>
        <span>{value}</span>
      </div>
      <div>{renderChildren}</div>
    </div>
  )
}

Select.displayName = 'Select'

export default Select
