import * as React from 'react';
import { get, RegisterOptions, useFormContext } from 'react-hook-form';

import clsxm from '@/lib/clsxm';

type InputProps = {
  id: string;
  label: string;
  placeholder?: string;
  validate?: RegisterOptions;
} & React.ComponentPropsWithRef<'input'>;

const Input = ({ id, validate, label, placeholder }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, id);
  return (
    <div>
      <label htmlFor={id} className='block'>
        {label}
      </label>
      <div className='relative mt-1'>
        <input
          {...register(id, validate)}
          className={clsxm('px-4 py-2 border block w-full')}
          placeholder={placeholder}
        />
      </div>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default Input;
