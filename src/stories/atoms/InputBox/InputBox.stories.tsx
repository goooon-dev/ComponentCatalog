import type { Meta, StoryObj } from '@storybook/react';
import { InputBox } from './InputBox';

const meta: Meta = {
  title: 'Atoms/InputBox',
  component: InputBox,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    type: { control: 'text' },
    label: { control: 'text' },
    labelPosition: { 
      control: { type: 'radio' },
      options: ['top', 'left']
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    onChange: () => {},
    placeholder: 'テキストを入力',
    label: 'ラベル',
    labelPosition: 'top',
  },
};

export const WithLabelLeft: Story = {
  args: {
    value: '',
    onChange: () => {},
    placeholder: '検索...',
    label: '検索',
    labelPosition: 'left',
  },
};
