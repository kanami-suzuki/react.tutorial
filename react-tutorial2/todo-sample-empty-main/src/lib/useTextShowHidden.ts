import { NextPage } from 'next';
import { useState } from 'react';

type UseTextShowHidden = () => {
  isHidden: boolean, 
  handleClickIndicate: () => void, 
  handleClickHidden: () => void
}

export const useTextShowHidden:UseTextShowHidden = () => {
  const [isHidden, setIsHidden] = useState(false);

  const handleClickIndicate = () => {
    setIsHidden(false);
  }

  const handleClickHidden = () => {
    setIsHidden(true);
  }
  return{isHidden, handleClickIndicate, handleClickHidden};
}