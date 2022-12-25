import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Button, { ButtonProps } from './';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: 'Primary 😃', size: 'large' };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, primary: false, label: 'Secondary 😇' };
