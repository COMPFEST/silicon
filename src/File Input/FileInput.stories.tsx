import React from 'react'
import FileInput from '.'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { FileInputProps } from './interface'

export default {
  id: 'file input',
  title: 'File Input',
  component: FileInput,
} as Meta

const Template: Story<FileInputProps> = (args) => <FileInput {...args} />

export const _FileInput = Template.bind({})
