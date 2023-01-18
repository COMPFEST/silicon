import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ToastProps } from './interface'
import useToast from '.'
import Toast from './trigger'

export default {
  id: 'toast',
  title: 'Toast',
  component: Toast,
} as Meta

const Demo = (props: ToastProps) => {
  return (
    <div>
      <button onClick={useToast({ ...props })}>Tap me!</button>
      <Toast position="top-left" />
    </div>
  )
}

const Template: Story<ToastProps> = (args) => <Demo {...args} />

const myPromise = new Promise(function (myResolve, myReject) {
  const x = Math.floor(Math.random() * 10)

  setTimeout(() => {
    if (x % 2 == 0) {
      myResolve(x)
    } else {
      myReject(x)
    }
  }, 5000)
})

export const Example = Template.bind({})
Example.args = {
  successMessage: 'Success! You got even number',
  errorMessage: 'Oops.. You got odd number',
  loadingMessage: 'Loading...',
  promise: myPromise,
}
