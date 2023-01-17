import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ToastProps } from './interface'
import Toast from '.'

export default {
    id: 'Toast',
    title: 'Toast',
    component: Toast,
} as Meta

const Template: Story<ToastProps> = (args) => <Toast {...args} />

const myPromise = new Promise(function (myResolve, myReject) {
    const x = Math.floor(Math.random() * 10);

    setTimeout(() => {
        if (x % 2 == 0) {
            myResolve(x);
        } else {
            myReject(x);
        }
    }, 5000)
});

export const Default = Template.bind({})
Default.args = {
    successMessage: 'Success! You got even number',
    errorMessage: 'Oops.. You got odd number',
    loadingMessage: 'Loading...',
    promise: myPromise,
}
