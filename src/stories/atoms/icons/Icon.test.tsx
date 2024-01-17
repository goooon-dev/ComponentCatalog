import { render } from '@testing-library/react';
import Icon from './IconCompornent';
import { FaBeer } from 'react-icons/fa';

describe('Icon Component', () => {
  test('renders Icon component with specified icon and size', () => {
    const { container } = render(<Icon Icon={FaBeer} size="2em" />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '2em');
    expect(svgElement).toHaveAttribute('height', '2em');
  });
});