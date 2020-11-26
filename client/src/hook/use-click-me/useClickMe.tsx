import React, { useEffect } from 'react';
const useClickMe = (ref: React.RefObject<HTMLElement>, callback: () => void): void => {
  const handleClickMe = (e: MouseEvent): void => {
    if (ref.current && (e.target as Node) === ref.current) {
      callback();
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('click', handleClickMe);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('click', handleClickMe);
      }
    };
  }, [ref.current]);
};

export default useClickMe;
