import { ComponentProps, forwardRef } from 'react';

export interface InputProps extends ComponentProps<'input'> {
  label: string;
  err?: string;
}

export const TextField = forwardRef<HTMLInputElement, InputProps>(function TextField(
  { label, err, type = 'text', ...props },
  ref
) {
  return (
    <label className="mb-6 w-full text-left font-rube font-normal">
      <span className="mb-[15px] text-[12px]/[16px] tracking-[o.5px] text-[#E0E0E0]">{label}</span>

      <input
        className="w-full border-b-2 border-[#333333] bg-transparent py-2 text-[14px] text-fv-300 outline-none placeholder:text-[11px]/[14px] placeholder:text-[#545663] focus:border-fv-200"
        ref={ref}
        {...props}
      />
      <span className="py-2 text-[13px] text-red-400">{err && err}</span>
    </label>
  );
});
