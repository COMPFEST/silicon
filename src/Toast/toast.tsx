import React from 'react'
import { Toaster, ToasterProps } from 'react-hot-toast'

const Toast: React.FC<ToasterProps> = (props) => {
  return <Toaster {...props} />
}

export default Toast
