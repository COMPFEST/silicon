import styled from 'styled-components'

export const TipCardContainer = styled.div`
  font-family: 'Inter', sans-serif;
  color: #ffffff;
  font-weight: 600;
  border-radius: 0.75rem;
  display: table;
  width: fit-content;
  background-color: #373951;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
`

export const Leading = styled.div`
  display: table-cell;
  vertical-align: middle;
  background-color: #3e405b;
  padding: 1rem;
  border-radius: 0.75rem;
`

export const Content = styled.div`
  max-width: 30ch;
  word-wrap: break-word;
  padding: 0.75rem 1rem;
`
