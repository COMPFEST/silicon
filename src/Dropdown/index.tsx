import React from 'react'
import { useState } from 'react'
import {
  DropdownContainer,
  DropdownHeader,
  DropdownContent,
  DropdownItem,
} from './Dropdown.style'

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState('')
  const options = ['satu', 'dua', 'tiga']

  const ArrowIcon = () => (
    <svg
      style={{ transform: isActive ? 'rotate(180deg)' : '' }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.12499 15L12.005 11.12L15.885 15C16.275 15.39 16.905 15.39 17.295 15C17.685 14.61 17.685 13.98 17.295 13.59L12.705 9.00001C12.315 8.61001 11.685 8.61001 11.295 9.00001L6.705 13.59C6.31499 13.98 6.31499 14.61 6.705 15C7.095 15.38 7.73499 15.39 8.12499 15Z"
        fill="white"
      />
    </svg>
  )

  return (
    <>
      <DropdownContainer>
        <DropdownHeader onClick={() => setIsActive(!setIsActive)}>
          {selected}
          <ArrowIcon />
        </DropdownHeader>

        {isActive && (
          <DropdownContent>
            {options.map((option) => (
              <DropdownItem
                onClick={() => {
                  setSelected(option)
                  setIsActive(false)
                }}
                key={option}
              >
                option
              </DropdownItem>
            ))}
          </DropdownContent>
        )}
      </DropdownContainer>
    </>
  )
}

export default Dropdown
