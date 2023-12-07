import React from 'react';
import './InputBox.css';

interface InputBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  label?: string;
  labelPosition?: 'top' | 'left';
}

export const InputBox: React.FC<InputBoxProps> = ({
  value,
  onChange,
  placeholder = '',
  type = 'text',
  label,
  labelPosition = 'top' // デフォルト値を 'top' に設定
}) => {
  const labelStyle = labelPosition === 'left' ? 'input-label-left' : 'input-label-top';

  return (
    <div className={`input-container ${labelStyle}`}>
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="input-box"
        aria-label={label ? label : 'Input Box'}
      />
    </div>
  );
};
