import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UseFormRegisterReturn } from 'react-hook-form';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  registration?: UseFormRegisterReturn;
}

export function FormInput({
  label,
  error,
  required,
  registration,
  className = '',
  ...props
}: FormInputProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <Label className="text-xs font-bold uppercase tracking-widest text-kodai-charcoal ml-1 flex items-center">
        {label}
        {required && <span className="text-kodai-gold ml-1">*</span>}
      </Label>
      <Input
        {...registration}
        {...props}
        className={`w-full px-0 py-4 rounded-none bg-transparent border-0 border-b-2 outline-none transition-all duration-300 placeholder:text-gray-300 text-base shadow-none ${
          error
            ? 'border-red-500 focus-visible:border-red-500 focus-visible:ring-0'
            : 'border-gray-200 focus-visible:border-kodai-charcoal focus-visible:ring-0'
        }`}
      />
      {error && <p className="text-xs font-medium text-red-500 animate-fade-in">{error}</p>}
    </div>
  );
}
