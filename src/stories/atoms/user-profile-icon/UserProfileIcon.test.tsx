import { render } from '@testing-library/react';
import { UserProfileIcon } from './UserProfileIcon';

describe('UserProfileIcon', () => {
  it('renders correctly', () => {
    const { container } = render(<UserProfileIcon altText="ユーザー名" />);
    expect(container).toBeInTheDocument();
  });

  it('displays image when imageUrl is provided', () => {
    const { getByAltText } = render(<UserProfileIcon imageUrl="src/assets/react.svg" altText="ユーザー名" />);
    expect(getByAltText('ユーザー名')).toHaveAttribute('src', 'src/assets/react.svg');
  });

  it('displays alt text when no image is provided', () => {
    const { getByText } = render(<UserProfileIcon altText="ユーザー名" />);
    expect(getByText('ユ')).toBeInTheDocument();
  });
});
