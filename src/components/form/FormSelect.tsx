import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FormSelectProps {
  label: string;
  icon: LucideIcon;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  icon: Icon,
  value,
  onChange,
  options,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
        <Icon className="w-5 h-5 mr-2" />
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;