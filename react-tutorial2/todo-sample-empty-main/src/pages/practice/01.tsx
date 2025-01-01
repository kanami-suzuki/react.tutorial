import { NextPage } from 'next';
import { useState } from 'react';

 import Button from '@/components/common/parts/Button';
 import { useChangeBgColor, COLORS } from '@/lib/useChangeBgColor';

const Page: NextPage = () => {
  const {currentColorIndex, changeColor} = useChangeBgColor()

  return( 
    <div className='h-screen pt-8' style={{ backgroundColor: COLORS[currentColorIndex]}}>
      <div className='flex justify-center'>
        <Button onClick={changeColor} label="色を変更" variant="primary"/>
      </div>
    </div>
  );
};

export default Page;
