// sidebar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { FaHome, FaUser } from 'react-icons/fa';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';

const meta = {
  title: 'Sidebar',
  component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menuItems: [
      {
        icon: FaHome,
        name: 'Home',
        link: '/home',
      },
      {
        icon: FaUser,
        name: 'Profile',
        link: '/profile',
      },
    ],
  },
  decorators: [(Story) => <Router><Story /></Router>],
};