import React from 'react'
import Post from './Post';

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ onClose, children }: ModalProps) {
  return (
    <div className='bg-black w-[860px] border rounded-xl text-white absolute'>
      <button className='absolute top-5 right-5 text-xl'
      onClick={onClose}
      >X</button>
      <Post />
      <div className='text-black p-5 rounded'>{children}</div>
    </div>

  )
}
