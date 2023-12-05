import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  // ボタンのレンダリングをテスト
  it('renders correctly', () => {
    const { getByText } = render(<Button label="Test Button" />);
    expect(getByText('Test Button')).toBeInTheDocument();
  });

  // プライマリボタンのスタイルをテスト
  it('has primary style when primary is true', () => {
    const { getByText } = render(<Button primary label="Primary Button" />);
    expect(getByText('Primary Button')).toHaveClass('button--primary');
  });

  // クリックイベントをテスト
  it('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button label="Clickable Button" onClick={handleClick} />);
    fireEvent.click(getByText('Clickable Button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // 背景色のスタイルをテスト
  it('applies the backgroundColor style', () => {
    const backgroundColor = 'red';
    const { getByText } = render(<Button label="Colored Button" backgroundColor={backgroundColor} />);
    expect(getByText('Colored Button')).toHaveStyle(`background-color: ${backgroundColor}`);
  });

  // aria-label の存在をテスト
  it('has appropriate aria-label', () => {
    const ariaLabel = 'Aria Label';
    const { getByLabelText } = render(<Button label="Button" ariaLabel={ariaLabel} />);
    expect(getByLabelText(ariaLabel)).toBeInTheDocument();
  });
});
