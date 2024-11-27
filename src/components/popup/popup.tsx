import { useEffect } from 'react';

import { PopupProps } from './Popup.types';

import { PopupType } from '@/types/enums';

export const Popup = ({ isOpen, message, type, onClose }: PopupProps) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen || !message) return null;

  const popupClasses = `popup fixed top-4 right-4 p-4 rounded shadow-lg ${
    type === PopupType.Success
      ? 'bg-green-400 text-white'
      : 'bg-red-400 text-white'
  }`;

  return (
    <div className={popupClasses}>
      <p>{message}</p>
    </div>
  );
};
