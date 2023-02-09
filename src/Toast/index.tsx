import React from 'react'
import toast, { Toaster, ToasterProps } from 'react-hot-toast'

export const useToast = toast

export const Toast: React.FC<ToasterProps> = (props) => {
  return (
    <Toaster
      {...props}
      toastOptions={{
        style: {
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          boxShadow: '0px 12px 16px rgba(0, 0, 0, 0.3)',
          borderRadius: '12px',
          fontWeight: '700',
          fontSize: '16px',
        },
        success: {
          style: {
            background: '#3EEBBE',
            border: '2px solid #68FCD6',
            color: 'rgba(0, 0, 0, 0.5)',
          },
        },
        loading: {
          style: {
            background: ' #373951',
            border: '2px solid #3E405B',
            color: '#FFFFFF',
          },
        },
        error: {
          style: {
            background: '#FF7387',
            border: '2px solid #FF96A5',
          },
        },
      }}
    />
  )
}
