import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  id: string;
  type?: "text" | "email" | "tel";
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}

const baseInputStyles =
  "w-full border-0 border-b border-[#cccccc] bg-transparent px-0 py-3 text-sm text-[#333333] placeholder:text-[#999999] focus:border-[#1a1a1a] focus:outline-none transition-colors";

export default function FormField({
  label,
  id,
  type = "text",
  value,
  onChange,
  required = false,
  multiline = false,
  rows = 4,
}: FormFieldProps) {
  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[#666666]"
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          rows={rows}
          className={`${baseInputStyles} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={baseInputStyles}
        />
      )}
    </div>
  );
}
