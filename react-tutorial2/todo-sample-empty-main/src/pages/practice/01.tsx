import { NextPage } from 'next';

 import { useRealTimeText } from '@/lib/useRealTimeText';

const Page: NextPage = () => {
  const {text, handleChangeText} = useRealTimeText();

  return( 
    <div className='mx-auto max-w-4xl mt-10'>
      <div className='flex justify-center'>
        <div>
          <h2 className='mb-4 text-center text-6xl'>{text}</h2>
          <div className='flex justify-center'>
            <input onChange={handleChangeText} className='border px-3 py-2' type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
