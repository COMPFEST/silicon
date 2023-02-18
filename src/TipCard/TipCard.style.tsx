import styled from 'styled-components'

export const TipCardContainer = styled.div`
  color: #ffffff;
  font-weight: 500;
  border-radius: 0.75rem;
  display: table;
  width: fit-content;
  background-color: #373951;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  line-height: 150%;
`

export const Leading = styled.div`
  display: table-cell;
  vertical-align: middle;
  background-color: #3e405b;
  padding: 1rem;
  border-radius: 0.75rem;
`

// Reference: https://stackoverflow.com/questions/49350396/how-to-make-a-div-have-2-rows-max-lines-and-get-ellipsis
export const Content = styled.div`
  display: -webkit-box;
  display: -moz-box;
  vertical-align: middle;
  max-width: 30ch;
  max-height: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  padding: 0.75rem 1rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  -moz-line-clamp: 2;
`