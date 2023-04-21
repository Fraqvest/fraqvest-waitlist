import { ComponentProps } from 'react';

export interface ButtonProps extends ComponentProps<'button'> {
  variant: 'filled' | 'outlined';
  fullwidth?: Boolean;
  extraClass?: string;
}

export const Button = ({ variant, fullwidth, extraClass, ...props }: ButtonProps) => {
  const buttonStyle =
    variant === 'outlined'
      ? 'border border-fv-200 text-fv-300 hover:border-opacity-75 hover:text-fv-200 duration-300'
      : variant === 'filled'
      ? 'bg-fv-200 text-fv-500 hover:bg-opacity-90'
      : 'text-fv-300';

  return (
    <button
      {...props}
      className={`${buttonStyle} ${
        fullwidth ? 'w-full' : ''
      } flex items-center justify-center gap-2.5 px-12 py-4 text-center font-rube text-[1rem]/[1.4rem] font-normal ${extraClass}`}
    />
  );
};
