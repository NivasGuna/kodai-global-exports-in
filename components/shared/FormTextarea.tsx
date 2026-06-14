import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { UseFormRegisterReturn } from 'react-hook-form';

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  registration?: UseFormRegisterReturn;
}

export function FormTextarea({
  label,
  error,
  required,
  registration,
  className = '',
  ...props
}: FormTextareaProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <Label className="text-xs font-bold uppercase tracking-widest text-kodai-charcoal ml-1 flex items-center">
        {label}
        {required && <span className="text-kodai-gold ml-1">*</span>}
      </Label>
      <Textarea
        {...registration}
        {...props}
        className={`w-full px-0 py-4 rounded-none bg-transparent border-0 border-b-2 outline-none transition-all duration-300 placeholder:text-gray-300 resize-none text-base shadow-none ${
          error
            ? 'border-red-500 focus-visible:border-red-500 focus-visible:ring-0'
            : 'border-gray-200 focus-visible:border-kodai-charcoal focus-visible:ring-0'
        }`}
      />
      {error && <p className="text-xs font-medium text-red-500 animate-fade-in">{error}</p>}
    </div>
  );
}
