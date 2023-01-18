import styled from 'styled-components'

export const CountdownContainer = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`

export const Title = styled.p`
  margin: 0;
  padding: 0;
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
  margin: 0;
  margin-top: -10px;
  padding: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
`

export const TimeLabel = styled.p`
  margin: 0;
  padding: 0;
  font-size: 18px;
`
