import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Chip from '.'

const ExampleIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.94883 0.46502C6.27083 0.45702 5.60723 0.681024 5.13617 1.15236L0.51117 5.88103C0.312237 6.08437 0.25897 6.37702 0.38617 6.63168L0.990301 7.83969L0.969503 11.6524C0.969436 12.4064 1.57363 13.0064 2.32363 13.0064H5.1153C5.78017 13.0064 6.3235 12.463 6.3235 11.7983V8.92302C6.3235 8.60036 6.58417 8.33969 6.90683 8.33969H7.0735C7.39617 8.33969 7.65683 8.60036 7.65683 8.92302V11.7983C7.65683 12.463 8.20017 13.0064 8.8655 13.0064H11.6568C12.4068 13.0064 13.0108 12.4024 13.0108 11.6524L12.9902 7.83969L13.5942 6.63168C13.7228 6.37502 13.6722 6.0637 13.4695 5.86036C13.2962 5.68703 9.2195 1.61036 8.80283 1.1937C8.3195 0.710365 7.62617 0.472353 6.94883 0.46502ZM6.94883 1.79835C7.28417 1.80502 7.61883 1.92702 7.84416 2.15236C8.2315 2.53902 11.5348 5.84235 12.1775 6.48569L11.7195 7.38103C11.6728 7.47503 11.6562 7.56836 11.6568 7.67302L11.6775 11.6524C11.6775 11.6617 11.6708 11.673 11.6568 11.673H8.99016V8.92302C8.99016 7.86369 8.13283 7.00636 7.0735 7.00636H6.90683C5.8475 7.00636 4.9903 7.86369 4.9903 8.92302V11.673H2.32363C2.31003 11.673 2.30284 11.6657 2.30284 11.6524L2.32363 7.67302C2.3243 7.56836 2.30804 7.47503 2.26117 7.38103L1.80284 6.46502L6.0735 2.08969C6.2795 1.88369 6.61283 1.79102 6.94883 1.79835Z"
      fill="currentColor"
    />
  </svg>
)

export default {
  id: 'chip',
  title: 'Chip',
  component: Chip,
  argTypes: {
    isSelected: {
      control: 'boolean',
      description: 'Controls whether the chip is selected or not.',
      defaultValue: false,
    },
    icon: {
      control: 'radio',
      options: ['None', 'Show'],
      defaultValue: 'None',
      description:
        'Utility prop to toggle the visibility of the icon. Not a real prop.',
    },
    leftIcon: {
      if: {
        arg: 'icon',
        eq: 'Show',
      },
      defaultValue: <ExampleIcon />,
      table: {
        disable: true,
      },
    },
    onClick: {
      action: 'Chip clicked!',
    },
  },
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />

export const Unselected = Template.bind({})
Unselected.args = {
  children: 'Chip',
}

export const Selected = Template.bind({})
Selected.args = {
  ...Unselected.args,
  isSelected: true,
}
