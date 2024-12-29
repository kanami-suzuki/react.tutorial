import { NextPage } from 'next';
import { useState } from 'react';

 import Button from '@/components/common/parts/Button';

 const COLORS = ['lightblue', 'lightgreen', 'lightpink', 'lavender', 'wheat'];

const Page: NextPage = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const changeColor = () => {
    setCurrentColorIndex((prevState) => (prevState + 1) % COLORS.length)
  }

  return( 
    <div className='h-screen pt-8' style={{ backgroundColor: COLORS[currentColorIndex]}}>
      <div className='flex justify-center'>
        <Button onClick={changeColor} label="色を変更" variant="primary"/>
      </div>
    </div>
  );
};

export default Page;
