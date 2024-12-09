import { NextPage } from 'next';

const Page: NextPage = () => {
  return( <div className='mx-auto max-w-4xl mt-10'>
    <div className='grid grid-cols-3 gap-x-4'>
      <div className='shadow-xl p-6'>
        <h3 className='text-xl font-bold'>タイトル</h3>
        <p className='mt-4 text-base'>
          コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ
        </p>
      </div>
      <div className='shadow-xl p-6'>
        <h3 className='text-xl font-bold'>タイトル</h3>
        <p className='mt-4 text-base'>
          コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ
        </p>
      </div>
      <div className='shadow-xl p-6'>
        <h3 className='text-xl font-bold'>タイトル</h3>
        <p className='mt-4 text-base'>
          コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ
        </p>
      </div>
    </div>
  </div>
  );
};

export default Page;
