import styled from 'styled-components'

export const Title = styled.div`
  align-items: stretch;
  padding: 13px;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const TitleContainer = styled.div<{
  isShowed: boolean
}>`
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
  background: ${(props) =>
    props.isShowed ? 'rgba(255, 255, 255, 0.1)' : 'none'};
`

export const ChildrenContainer = styled.div<{
  isShowed: boolean
}>`
  width: 431px;
  padding: 8px 13px;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: rgba(255, 255, 255, 0.8);
  width: 100%;
  display: ${(props) => (props.isShowed ? 'block' : 'none')};
  overflow-wrap: break-word;
  animation: fadeIn 100ms ease-out;
  @keyframes fadeIn {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
`

export const MainContainer = styled.div<{
  isShowed: boolean
}>`
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
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.1);
  border-width: ${(props) => (props.isShowed ? '4px' : ' 0px')};
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
  transition: all 1s linear;
`
