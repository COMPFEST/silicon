import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import Button from '.'
import { ButtonProps } from './interface'
import { within, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const ExampleIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.9233 2.19751C10.9063 2.18551 9.91095 2.52152 9.20435 3.22852L2.26685 10.3215C1.96845 10.6265 1.88855 11.0655 2.07935 11.4475L2.98554 13.2595L2.95435 18.9785C2.95425 20.1095 3.86054 21.0095 4.98554 21.0095H9.17304C10.1703 21.0095 10.9853 20.1945 10.9853 19.1975V14.8845C10.9853 14.4005 11.3763 14.0095 11.8603 14.0095H12.1103C12.5943 14.0095 12.9853 14.4005 12.9853 14.8845V19.1975C12.9853 20.1945 13.8003 21.0095 14.7983 21.0095H18.9853C20.1103 21.0095 21.0163 20.1035 21.0163 18.9785L20.9853 13.2595L21.8913 11.4475C22.0843 11.0625 22.0083 10.5955 21.7043 10.2905C21.4443 10.0305 15.3293 3.91553 14.7043 3.29053C13.9793 2.56553 12.9393 2.20851 11.9233 2.19751ZM11.9233 4.19751C12.4263 4.20751 12.9283 4.39052 13.2663 4.72852C13.8473 5.30852 18.8023 10.2635 19.7663 11.2285L19.0793 12.5715C19.0093 12.7125 18.9843 12.8525 18.9853 13.0095L19.0163 18.9785C19.0163 18.9925 19.0063 19.0095 18.9853 19.0095H14.9853V14.8845C14.9853 13.2955 13.6993 12.0095 12.1103 12.0095H11.8603C10.2713 12.0095 8.98554 13.2955 8.98554 14.8845V19.0095H4.98554C4.96514 19.0095 4.95435 18.9985 4.95435 18.9785L4.98554 13.0095C4.98654 12.8525 4.96215 12.7125 4.89185 12.5715L4.20435 11.1975L10.6103 4.63453C10.9193 4.32553 11.4193 4.18651 11.9233 4.19751Z"
      fill="white"
    />
  </svg>
)

export default {
  id: 'button',
  title: 'Button',
  component: Button,
  argTypes: {
    icon: {
      control: 'radio',
      options: ['None', 'Left Icon', 'Right Icon'],
      defaultValue: 'None',
    },
    size: {
      defaultValue: 'regular',
    },
    disabled: {
      defaultValue: false,
    },
    isLoading: {
      defaultValue: false,
    },
    leftIcon: {
      if: {
        arg: 'icon',
        eq: 'Left Icon',
      },
      defaultValue: <ExampleIcon />,
      table: {
        disable: true,
      },
    },
    rightIcon: {
      if: {
        arg: 'icon',
        eq: 'Right Icon',
      },
      defaultValue: <ExampleIcon />,
      table: {
        disable: true,
      },
    },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = { children: 'Primary' }

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  children: 'Secondary',
  variant: 'secondary',
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  ...Primary.args,
  children: 'Tertiary',
  variant: 'tertiary',
}

export const Ghost = Template.bind({})
Ghost.args = {
  ...Primary.args,
  children: 'Tertiary',
  variant: 'ghost',
}

Ghost.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByRole('button'))
  await expect(canvas.getByRole('button')).toHaveTextContent('Tertiary')
}
