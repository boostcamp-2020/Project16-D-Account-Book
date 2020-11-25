import React, { useEffect } from 'react';

const useClickOutSide = (ref: React.RefObject<HTMLElement>, callback: () => void): void => {
  useEffect(() => {
    const handleClickOutSide = (e: MouseEvent): void => {
      e.stopPropagation();
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClickOutSide);

    return () => {
      document.removeEventListener('click', handleClickOutSide);
    };
  }, [ref]);
};

export default useClickOutSide;
