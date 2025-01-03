import { NextPage } from 'next';
import { useState, ChangeEvent } from 'react';

 import Button from '@/components/common/parts/Button';
 import { useDisplayFeedback } from '@/lib/useDisplayFeedback';

const Page: NextPage = () => {
  const{feedbackList, handleInputChange, handleSubmit, inputValue} = useDisplayFeedback();

  return( 
    <div className='mt-8 mx-auto max-w-4xl'>
      <div className='flex justify-center'>
        <div>
          <textarea className='border px-3 py-2 rounded-sm' placeholder='フィードバックを入力してください' value={inputValue} onChange={handleInputChange} />
          <div className='flex ustify-center mt-4'>
            <Button onClick={handleSubmit} label='送信する' variant='primary'/>
          </div>
          <div className='mt-2'>
            {
              feedbackList.map((feedback, index) => (
                <li key={index}>{feedback}</li>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
