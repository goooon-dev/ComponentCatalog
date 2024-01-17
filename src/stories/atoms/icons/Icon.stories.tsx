import type { Meta, StoryObj } from '@storybook/react';
import { FaBeer } from 'react-icons/fa';
import Icon from './IconCompornent';

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: `<a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noopener noreferrer">アイコン一覧 </a>`,
      },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    Icon: FaBeer,
    size: '1em',
  },
};

export const Large: Story = {
  args: {
    Icon: FaBeer,
    size: '2em',
  },
};

export const Small: Story = {
  args: {
    Icon: FaBeer,
    size: '0.5em',
  },
};

export const ColoredIcon: Story = {
  args: {
    Icon: FaBeer,
    size: '1em',
    color: 'red', // アイコンの色を赤に設定
  },
};
