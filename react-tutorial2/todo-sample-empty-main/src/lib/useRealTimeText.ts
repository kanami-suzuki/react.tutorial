import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';

type UseRealTimeText = () => {
  text: string;
  handleChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const useRealTimeText: UseRealTimeText = () => {
  const [text, setText] = useState('');

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }
  return{text, handleChangeText};
}