import type { Meta, StoryObj } from '@storybook/react';
import { UserProfileIcon } from './UserProfileIcon';

const meta: Meta = {
  title: 'Atoms/UserProfileIcon',
  tags: ['autodocs'],
  component: UserProfileIcon,
  argTypes: {
    imageUrl: { control: 'text' },
    altText: { control: 'text' },
    size: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    altText: 'ユーザー名',
  },
};

export const DefaultLargeSize: Story = {
  args: {
    altText: 'ユーザー名',
    size: '100px',
  },
};

export const WithImage: Story = {
  args: {
    imageUrl: 'src/assets/react.svg',
    altText: 'ユーザー名',
  },
};

export const LargeSize: Story = {
  args: {
    imageUrl: 'src/assets/react.svg',
    altText: 'ユーザー名',
    size: '100px',
  },
};
