import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Title } from '../components/Title';

const componentMeta: ComponentMeta<typeof Title> = {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    text: { control: 'text' }
  }
};

export default componentMeta;

const Template: ComponentStory<typeof Title> = (args) => <Title>{args.text}</Title>;

export const Normal = Template.bind({});
Normal.args = {
  text: 'This is a title'
};
