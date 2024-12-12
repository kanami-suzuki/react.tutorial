import ThreeBoxContent from '@/components/ThreeBoxContent';
import { NextPage } from 'next';

const Page: NextPage = () => {
  return( 
  <div className='mx-auto max-w-4xl mt-10'>
    <ThreeBoxContent 
    title1='これはタイトルです。'
    content1='これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。'
    title2='これはタイトルです!'
    content2='これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。'
    title3='これはタイトルです?'
    content3='これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。'
    />
  </div>
  );
};

export default Page;
