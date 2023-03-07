import * as React from 'react';
import { ImSpinner8 } from 'react-icons/im';

export default function Loading() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center text-gray-800'>
      <ImSpinner8 className='mb-4 animate-spin text-4xl' />
      <p>Loading...</p>
    </div>
  );
}
