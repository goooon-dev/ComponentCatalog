import React from 'react';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  ariaLabel?: string; // スクリーンリーダー用のラベル
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
  ariaLabel
}) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  const buttonClasses = `button button--${size} ${mode}`;

  return (
    <button
      type="button"
      className={buttonClasses}
      style={{ backgroundColor }}
      onClick={onClick}
      aria-label={ariaLabel || label}
    >
      {label}
    </button>
  );
};
