import React, { useEffect } from 'react'
import { useState } from 'react'
import {
  DropdownContainer,
  DropdownHeader,
  DropdownContent,
  DropdownItemContainer,
  DropdownHeaderContainer,
} from './Dropdown.style'
import { DropdownProps } from './interface'

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  const options = children
  const [selected, setSelected] = useState<number | null>(null)
  const [isActive, setIsActive] = useState(false)
  const [clicked, setClicked] = useState(false)

  const ArrowIcon = () => (
    <svg
      transform={isActive ? 'rotate(180)' : ''}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.875 9L11.995 12.88L8.11501 9C7.72501 8.61 7.09501 8.61 6.70501 9C6.31501 9.39 6.31501 10.02 6.70501 10.41L11.295 15C11.685 15.39 12.315 15.39 12.705 15L17.295 10.41C17.685 10.02 17.685 9.39 17.295 9C16.905 8.62 16.265 8.61 15.875 9Z"
        fill="white"
      />
    </svg>
  )

  useEffect(() => {
    for (let i = 0; i < options.length; i++) {
      if (options[i].props.isSelected) setSelected(i)
    }
  }, [])

  return (
    <DropdownContainer>
      <DropdownHeaderContainer isActive={isActive}>
        <DropdownHeader
          isActive={isActive}
          onClick={() => {
            setIsActive(!isActive)
            setClicked(true)
          }}
        >
          {selected !== null ? options[selected] : 'Select an option'}
          {clicked ? <ArrowIcon /> : <></>}
        </DropdownHeader>
      </DropdownHeaderContainer>

      {isActive && (
        <DropdownContent isActive={isActive}>
          {options.map(
            (value, idx) =>
              (selected === null ||
                options[selected].props.children !== value.props.children) && (
                <DropdownItemContainer
                  key={value.props.children}
                  isActive={isActive}
                  onClick={() => {
                    setSelected(idx)
                    setIsActive(false)
                  }}
                >
                  {value}
                </DropdownItemContainer>
              )
          )}
        </DropdownContent>
      )}
    </DropdownContainer>
  )
}

export default Dropdown
