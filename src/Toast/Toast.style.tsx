import styled from 'styled-components'

export const SuccessToast = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 12px 16px;
gap: 8px;
background: #3EEBBE;
border: 2px solid #68FCD6;
box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.3);
border-radius: 12px;
font-weight: 700;
font-size: 16px;
line-height: 150%;
color: rgba(0, 0, 0, 0.5);
`

export const ErrorToast = styled(SuccessToast)`
background: #FF7387;
border: 2px solid #FF96A5;
`

export const LoadingToast = styled(SuccessToast)`
background: #373951;
border: 2px solid #3E405B;
color: #FFFFFF;
`
