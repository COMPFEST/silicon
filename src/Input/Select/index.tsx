import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { SelectInputProps, DropdownIconProps } from './interface'
import {
  Label,
  SelectContainer,
  StyledSelect,
  StyledOption,
  SelectedOption,
  Options,
  DropdownIconDiv,
} from './Select.style'

const SelectInput = forwardRef<HTMLInputElement, SelectInputProps>(
  ({ label, options, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

    const [value, setValue] = useState<string | number>(Object.keys(options)[0])
    const [showOption, setShowOption] = useState(false)

    const optionHandler = (value: string | number) => {
      console.log(value)
      inputRef.current
      setValue(value)
    }

    const toggleOption = () => {
      setShowOption(!showOption)
    }

    const closeOption = () => {
      setShowOption(false)
    }

    return (
      <>
        <Label>{label}</Label>
        <SelectContainer>
          <StyledSelect>
            <SelectedOption onClick={toggleOption} optionHidden={!showOption}>
              <span>{value}</span>
              <DropdownIcon isFlipped={showOption} />
            </SelectedOption>
            <Options>
              {Object.entries(options).map(([key, value]) => {
                return (
                  <StyledOption
                    key={key}
                    optionHidden={!showOption}
                    onClick={(event) => {
                      optionHandler(event.currentTarget.innerText)
                      closeOption()
                      console.log(showOption)
                    }}
                    value={value}
                    hidden={!showOption}
                  >
                    {key}
                  </StyledOption>
                )
              })}
            </Options>
          </StyledSelect>
        </SelectContainer>
      </>
    )
  }
)

const DropdownIcon: React.FC<DropdownIconProps> = ({ isFlipped = false }) => (
  <DropdownIconDiv isFlipped={isFlipped}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.875 8.99999L11.995 12.88L8.11498 8.99999C7.72498 8.60999 7.09498 8.60999 6.70498 8.99999C6.31498 9.38999 6.31498 10.02 6.70498 10.41L11.295 15C11.685 15.39 12.315 15.39 12.705 15L17.295 10.41C17.685 10.02 17.685 9.38999 17.295 8.99999C16.905 8.61999 16.265 8.60999 15.875 8.99999Z"
        fill="white"
      />
    </svg>
  </DropdownIconDiv>
)

SelectInput.displayName = 'SelectInput'
export default SelectInput
