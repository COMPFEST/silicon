import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ToastProps } from './interface'
import { useToast, Toast } from '.'
import Button from '../Button'
import { StyledLoadingIcon } from '../Button/Button.style'

const LoadingIcon: React.FC = () => (
  <svg
    style={{ paddingLeft: '8px' }}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.8333 7.58228C19.6974 7.02366 19.9559 5.85486 19.2469 5.10922C18.3412 4.15679 17.2524 3.38769 16.039 2.85195C14.2544 2.06403 12.2783 1.8153 10.3541 2.13638C8.4299 2.45746 6.64164 3.33434 5.20957 4.65902C3.77749 5.98369 2.76414 7.69831 2.29433 9.59168C1.82452 11.4851 1.91876 13.4745 2.56545 15.315C3.21213 17.1555 4.38303 18.7666 5.93391 19.95C7.48479 21.1334 9.34793 21.8373 11.2939 21.975C12.617 22.0687 13.9391 21.8978 15.1849 21.4793C16.1602 21.1516 16.4781 19.9975 15.9754 19.0997C15.4727 18.202 14.3348 17.9135 13.3293 18.1315C12.7505 18.257 12.1539 18.3005 11.557 18.2583C10.3361 18.1718 9.16719 17.7302 8.19417 16.9878C7.22116 16.2453 6.48655 15.2345 6.08083 14.0798C5.6751 12.9251 5.61597 11.6769 5.91073 10.489C6.20549 9.30115 6.84126 8.22541 7.73973 7.39432C8.6382 6.56323 9.76014 6.01308 10.9674 5.81163C12.1746 5.61019 13.4144 5.76624 14.534 6.26058C15.0815 6.50229 15.5885 6.81971 16.0415 7.20117C16.8285 7.86397 17.9692 8.14091 18.8333 7.58228Z"
      fill="white"
    />
  </svg>
)

const ErrorIcon: React.FC = () => (
  <svg
    style={{ paddingLeft: '8px' }}
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.0141 -0.00109863C4.49133 -0.00109863 0.0141296 4.4759 0.0141296 9.9989C0.0141296 15.5219 4.49133 19.9989 10.0141 19.9989C15.5371 19.9989 20.0141 15.5219 20.0141 9.9989C20.0141 4.4759 15.5371 -0.00109863 10.0141 -0.00109863ZM10.0141 1.9989C14.4321 1.9989 18.0141 5.5809 18.0141 9.9989C18.0141 14.4169 14.4321 17.9989 10.0141 17.9989C5.59583 17.9989 2.01413 14.4169 2.01413 9.9989C2.01413 5.5809 5.59583 1.9989 10.0141 1.9989ZM10.0141 4.9989C9.46213 4.9989 9.01413 5.4469 9.01413 5.9989V10.9989C9.01413 11.5509 9.46213 11.9989 10.0141 11.9989C10.5661 11.9989 11.0141 11.5509 11.0141 10.9989V5.9989C11.0141 5.4469 10.5661 4.9989 10.0141 4.9989ZM10.0141 12.9989C9.46213 12.9989 9.01413 13.4469 9.01413 13.9989C9.01413 14.5509 9.46213 14.9989 10.0141 14.9989C10.5661 14.9989 11.0141 14.5509 11.0141 13.9989C11.0141 13.4469 10.5661 12.9989 10.0141 12.9989Z"
      fill="black"
      fillOpacity="0.5"
    />
  </svg>
)

const SuccessIcon: React.FC = () => (
  <svg
    style={{ paddingLeft: '8px' }}
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.0141 -0.00109863C4.49133 -0.00109863 0.0141296 4.47589 0.0141296 9.99889C0.0141296 15.5219 4.49133 19.9989 10.0141 19.9989C15.5369 19.9989 20.0141 15.5219 20.0141 9.99889C20.0141 4.47589 15.5369 -0.00109863 10.0141 -0.00109863ZM10.0141 1.9989C14.4324 1.9989 18.0141 5.58089 18.0141 9.99889C18.0141 14.4169 14.4324 17.9989 10.0141 17.9989C5.59583 17.9989 2.01413 14.4169 2.01413 9.99889C2.01413 5.58089 5.59583 1.9989 10.0141 1.9989ZM14.0141 6.99889C13.7582 6.99889 13.4906 7.0849 13.2953 7.2799L9.57663 11.0299C9.31883 11.2879 9.06013 11.2399 8.85793 10.9369L7.85793 9.43688C7.55153 8.97688 6.91123 8.84889 6.45163 9.15489C5.99213 9.46189 5.86403 10.1019 6.17033 10.5609L7.17033 12.0609C8.07273 13.4149 9.83263 13.5869 10.9829 12.4369L14.7329 8.71788C15.1234 8.32688 15.1234 7.6709 14.7329 7.2799C14.5376 7.0849 14.27 6.99889 14.0141 6.99889Z"
      fill="black"
      fillOpacity="0.5"
    />
  </svg>
)

export default {
  id: 'toast',
  title: 'Toast',
  component: Toast,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'promise', 'success', 'error'],
      defaultValue: 'default',
    },
  },
} as Meta

const Demo = (props: ToastProps) => {
  function callToast() {
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

    if (props.variant == 'promise')
      return useToast.promise(
        myPromise,
        {
          loading: 'Loading...',
          success: 'Success! You got even number',
          error: 'Oops.. You got odd number',
        },
        {
          icon: <SuccessIcon />,
          loading: {
            icon: (
              <StyledLoadingIcon>
                <LoadingIcon />
              </StyledLoadingIcon>
            ),
          },
          error: {
            icon: <ErrorIcon />,
          },
        }
      )

    if (props.variant == 'default') return useToast('This is the default!')

    if (props.variant == 'success') return useToast.success('Success message')

    if (props.variant == 'error') return useToast.error('Error message')
  }
  return (
    <div>
      <Button onClick={() => callToast()} key={'toast'}>
        Tap me!
      </Button>
      <Toast />
    </div>
  )
}

const Template: Story<ToastProps> = (args) => <Demo {...args} />

export const DefaultToast = Template.bind({})
DefaultToast.args = {
  variant: 'default',
}
export const PromiseToast = Template.bind({})
PromiseToast.args = {
  variant: 'promise',
}

export const SuccessToast = Template.bind({})
SuccessToast.args = {
  variant: 'success',
}

export const ErrorToast = Template.bind({})
ErrorToast.args = {
  variant: 'error',
}
