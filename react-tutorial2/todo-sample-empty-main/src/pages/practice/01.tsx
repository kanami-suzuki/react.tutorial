import { NextPage } from 'next';
import { useState } from 'react';

import Button from '@/components/common/parts/Button';

const Page: NextPage = () => {
  const [count, setCount] = useState(0);
  const onClickCountUp = () => {
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  }

  return( 
    <div className='mx-auto max-w-4xl mt-10'>
      <div className='flex justify-center'>
        <div>
          <h2 className='text-6xl mb-4 text-center'>{count}</h2>
          <Button 
            onClick={onClickCountUp} 
            label="カウントアップ" 
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
