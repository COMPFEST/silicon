import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import { SearchIconProps, SearchInputProps } from './interface'
import { SearchDiv, SearchIconDiv, StyledSearchInput } from './Search.style'

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    { align = 'left', icon = 'none', placeholder = 'Placeholder', ...props },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

    return (
      <>
        <SearchDiv onClick={() => inputRef.current?.focus()}>
          {icon === 'left' && <SearchIcon />}
          {icon === 'right' && align === 'center' && <SearchIcon hidden />}
          <StyledSearchInput
            ref={inputRef}
            placeholder="Placeholder"
            align={align}
            {...props}
            type="text"
          ></StyledSearchInput>
          {icon === 'right' && <SearchIcon />}
          {icon === 'left' && align === 'center' && <SearchIcon hidden />}
        </SearchDiv>
      </>
    )
  }
)

const SearchIcon: React.FC<SearchIconProps> = ({ hidden = false }) => (
  <SearchIconDiv hidden={hidden}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0142 1.95317C5.59586 1.95317 2.01416 5.53518 2.01416 9.95319C2.01416 14.3712 5.59586 17.9532 10.0142 17.9532C11.8509 17.9532 13.5918 17.3222 14.9421 16.2822L19.2954 20.6722C19.686 21.0622 20.3424 21.0622 20.733 20.6722C21.1235 20.2812 21.1235 19.6252 20.733 19.2342L16.3495 14.8742C17.3903 13.5242 18.0142 11.7902 18.0142 9.95319C18.0142 5.53518 14.4325 1.95317 10.0142 1.95317ZM10.0142 3.95318C13.3279 3.95318 16.0142 6.63918 16.0142 9.95319C16.0142 13.2672 13.3279 15.9532 10.0142 15.9532C6.70046 15.9532 4.01416 13.2672 4.01416 9.95319C4.01416 6.63918 6.70046 3.95318 10.0142 3.95318Z"
        fill="white"
      />
    </svg>
  </SearchIconDiv>
)

SearchInput.displayName = 'SearchInput'

export default SearchInput
