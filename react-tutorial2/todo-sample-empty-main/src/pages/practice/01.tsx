import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useState } from 'react';

const Page: NextPage = () => {
  const [isHidden, setIsHidden] = useState(false);

  const handleClickIndicate = () => {
    setIsHidden(false);
  }

  const handleClickHidden = () => {
    setIsHidden(true);
  }

  return( 
    <div className='mx-auto max-w-4xl mt-10'>
      <div className='flex justify-center'>
        <div>
          {!isHidden && <h2 className='mb-4 text-6xl'>こんにちは</h2>}

          <div className='flex justify-center gap-x-4'>
            <Button onClick={handleClickIndicate} label='表示' variant='primary'/>
            <Button onClick={handleClickHidden} label='非表示' variant='primary'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
