import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

type InputTypes = 'text' | 'email' | 'password' | 'number' | 'search' | 'date' | 'textarea';

type CommonInputProps = {
  type?: InputTypes;
  label?: string;
  name?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  style?: React.CSSProperties;
  rows?: number; // for textarea
};

const Inputs: React.FC<CommonInputProps> = ({
  type = 'text',
  label,
  name,
  value,
  onChange,
  placeholder,
  className = '',
  error,
  disabled = false,
  required = false,
  style,
  rows = 3,
}) => {
  const inputProps = {
    name,
    value,
    onChange,
    placeholder,
    className: `input ${className}`,
    disabled,
    required,
    style,
  };

  return (
    <div className="input-wrapper" style={{ marginBottom: '1rem' }}>
      {label && (
        <label htmlFor={name} style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
          {label}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea id={name} rows={rows} {...(inputProps as TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      ) : (
        <input id={name} type={type} {...(inputProps as InputHTMLAttributes<HTMLInputElement>)} />
      )}
      {error && (
        <span style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
          {error}
        </span>
      )}
    </div>
  );
};

export default Inputs;