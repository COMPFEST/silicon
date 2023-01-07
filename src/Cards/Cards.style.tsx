import styled from 'styled-components'

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #3e405b;
  border-radius: 24px;
  padding: 24px;
  gap: 20px;
  max-width: 239px;
  width: 100%;
  position: relative;
  z-index: 1;
`

export const Title = styled.div`
  font-family: 'R-Flex';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  color: #ffffff;
`

export const Content = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: rgba(255, 255, 255, 0.8);
`

export const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  max-width: 289px;
  max-height: 400px;
  left: 866px;
  top: 144px;
  background: #373951;
  border-radius: 24px;
`

export const Image = styled.img`
  border-radius: 24px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  position: relative;
`