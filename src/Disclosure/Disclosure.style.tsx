import styled from 'styled-components'

export const Title = styled.div`
  align-items: stretch;
  padding: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const TitleContainer = styled.div`
  color: #ffffff;
  border-radius: 8px;
  display: flex;
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
  padding-right: 13px;
  :hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

export const ChildrenContainer = styled.div`
  width: 431px;
  padding: 8px 13px;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: rgba(255, 255, 255, 0.8);
  width: 100%;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  font-weight: 700;
  box-sizing: border-box;
  padding: 16px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  background: #373951;
  @media only screen and (min-width: 300px) {
    width: 280px;
  }
  @media only screen and (min-width: 400px) {
    width: 350px;
  }
  @media only screen and (min-width: 750px) {
    width: 495px;
  }
  cursor: pointer;
`

export const StyledCaretIcon = styled.div`
  transition: transform 0.1s linear;
`
