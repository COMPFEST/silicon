import styled from 'styled-components'

export const DropdownContainer = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
`
export const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 16px 20px 16px 20px;
  border-radius: 8px;
  width: 256px;
  height: 56px;
  overflow: hidden;
  text-overflow: truncate;
`
export const DropdownContent = styled.div`
  position: absolute;
  top: 110%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 256px;
`
export const DropdownItem = styled.div`
  margin: 16px 20px 16px 20px;
  display: flex;
  text-align: left;
  overflow-wrap: break-word;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`
