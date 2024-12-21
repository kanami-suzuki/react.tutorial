import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useState } from 'react';
// import { useTextShowHidden } from '@/lib/useTextShowHidden';

const Page: NextPage = () => {
  const [text, setText] = useState('');

  const handleChengeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return( 
    <div className='mx-auto max-w-4xl mt-10'>
      <div className='flex justify-center'>
        <div>
          <h2 className='mb-4 text-center text-6xl'>{text}</h2>
          <div className='flex justify-center'>
            <input onChange={handleChengeText} className='border px-3 py-2' type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
