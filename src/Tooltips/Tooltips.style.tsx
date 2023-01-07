import styled from 'styled-components'

export const TooltipsContainer = styled.div`
  background-color: white;
  border-radius: 6px;
`

export const TooltipsSpanTop = styled.span`
  background-color: #3e405b;
  color: white;
  max-width: 33ch;
  position: absolute;
  padding: 1px 16px;
  margin: 2px;
  visibility: hidden;
  border-radius: 6px;
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 20%;
    margin-left: -10px;
    border-width: 7px;
    border-style: solid;
    border-color: #3e405b transparent transparent transparent;
  }
`
export const TooltipsSpanBot = styled.span`
  background-color: #3e405b;
  color: white;
  max-width: 33ch;
  position: absolute;
  padding: 1px 16px;
  margin: 2px;
  visibility: hidden;
  border-radius: 6px;
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
  &:after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 20%;
    margin-left: -10px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent #3e405b transparent;
  }
`

export const Tester = styled.div`
  position: absolute;
  bottom: 50%;
  left: 0;
`

export const Tester2 = styled.div`
  position: absolute;
  bottom: 5px;
`
