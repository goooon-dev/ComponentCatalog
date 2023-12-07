import { render, screen, fireEvent } from '@testing-library/react';
import { InputBox } from './InputBox';

describe('InputBox', () => {
  it('renders correctly', () => {
    render(<InputBox value="" onChange={() => {}} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('displays the correct placeholder', () => {
    render(<InputBox value="" onChange={() => {}} placeholder="検索..." />);
    expect(screen.getByPlaceholderText('検索...')).toBeInTheDocument();
  });

  it('renders correctly with top label', () => {
    render(<InputBox value="" onChange={() => {}} label="テストラベル" labelPosition="top" />);
    expect(screen.getByLabelText('テストラベル')).toBeInTheDocument();
  });

  it('renders correctly with left label', () => {
    render(<InputBox value="" onChange={() => {}} label="テストラベル" labelPosition="left" />);
    expect(screen.getByLabelText('テストラベル')).toBeInTheDocument();
  });

  it('updates value on change', () => {
    const handleChange = jest.fn();
    render(<InputBox value="" onChange={handleChange} label="テストラベル" />);
    const inputElement = screen.getByLabelText('テストラベル');
    fireEvent.change(inputElement, { target: { value: 'Hello' } });
    expect(handleChange).toHaveBeenCalledWith('Hello');
  });

});
