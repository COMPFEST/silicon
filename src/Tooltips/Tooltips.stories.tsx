import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import TooltipsWrapper from "./TooltipsWrapper";

export default {
    id:'tooltips',
    title:'Tooltips',
    component:TooltipsWrapper,
} as ComponentMeta<typeof TooltipsWrapper>

const Template : ComponentStory<typeof TooltipsWrapper> = (args) => <TooltipsWrapper {... args} />

export const Show = Template.bind({})

Show.args = {
    text : 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
}