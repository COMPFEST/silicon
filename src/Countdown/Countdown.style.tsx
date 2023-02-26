import styled from 'styled-components'

export const CountdownContainer = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  font-weight: 600;
`

export const Title = styled.p`
  letter-spacing: 0.5rem;
  text-transform: uppercase;
`

export const TimeContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const TimeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 93px;
  height: 111px;
  @media only screen and (max-width: 768px) {
    width: 70px;
    height: 90px;
  }
  text-align: center;
`

export const DotContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Dot = styled.div`
  background-color: #3e405b;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
`

export const TimeDigit = styled.p`
  font-weight: 700;
  font-size: 36px;
  margin-top: -10px;
  margin-bottom: -5px;

  @media only screen and (max-width: 768px) {
    font-size: 28px;
    margin-top: 0px;
  }
`

export const TimeLabel = styled.p`
  font-size: 16px;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`
