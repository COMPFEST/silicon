import React, { useEffect } from 'react'
import { DisclosureProps } from './interface'
import {
  TitleContainer,
  MainContainer,
  ChildrenContainer,
  StyledCaretIcon,
  Title,
} from './Disclosure.style'

const Disclosure: React.FC<
  DisclosureProps & React.ComponentPropsWithoutRef<'div'>
> = ({ title, children, ...props }) => {
  const handleClick = () => {
    const children = document.getElementById('children')
    const main = document.getElementById('container')
    const caret = document.getElementById('caret')
    const title = document.getElementById('title')

    if (children!.style.display === 'none') {
      children!.style.display = 'block'
      caret!.setAttribute('style', 'transform: rotate(-180deg)')
      main!.setAttribute('style', 'border: 4px solid rgba(255, 255, 255, 0.1)')
      title!.setAttribute('style', 'background: rgba(255, 255, 255, 0.1)')
    } else {
      children!.style.display = 'none'
      caret!.setAttribute('style', 'transform: rotate(-0deg)')
      main!.setAttribute('style', 'border: 0px solid rgba(255, 255, 255, 0.1)')
      title!.setAttribute(
        'style',
        ':hover {background: rgba(255, 255, 255, 0.1);}'
      )
    }
  }

  useEffect(() => {
    const children = document.getElementById('children')
    children!.style.display = 'none'
  }, [])

  return (
    <MainContainer id="container" {...props}>
      <TitleContainer id="title" data-testid="title" onClick={handleClick}>
        <Title>{title}</Title>
        <StyledCaretIcon id="caret">
          <CaretIcon />
        </StyledCaretIcon>
      </TitleContainer>
      <ChildrenContainer id="children" data-testid='children'>{children}</ChildrenContainer>
    </MainContainer>
  )
}

const CaretIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
  >
    <path
      d="M2.12499 7.00001L6.00499 3.12001L9.88499 7.00001C10.275 7.39001 10.905 7.39001 11.295 7.00001C11.685 6.61001 11.685 5.98001 11.295 5.59001L6.70499 1.00001C6.31499 0.610012 5.68499 0.610012 5.29499 1.00001L0.704995 5.59001C0.314995 5.98001 0.314995 6.61001 0.704995 7.00001C1.095 7.38001 1.73499 7.39001 2.12499 7.00001Z"
      fill="white"
    />
  </svg>
)

export default Disclosure
