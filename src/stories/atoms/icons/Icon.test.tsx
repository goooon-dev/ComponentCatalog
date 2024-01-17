import { render } from '@testing-library/react';
import Icon from './IconCompornent';
import { FaBeer } from 'react-icons/fa';

describe('Icon Component', () => {
  test('renders Icon component with specified icon and size', () => {
    const { getByRole } = render(<Icon Icon={FaBeer} size="2em" />);
    const iconElement = getByRole('img');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute('width', '2em');
    expect(iconElement).toHaveAttribute('height', '2em');
  });
});