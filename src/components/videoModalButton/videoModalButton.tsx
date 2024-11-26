'use client';

import { useState } from 'react';
import { Modal } from '@components/modal/Modal';
import { Button } from 'clients-blogs-ui-kit';
import { useTranslations } from 'next-intl';
import { linkToVideo } from '@/constants/constants';

export const VideoModalButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const t = useTranslations('header');
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Button
        onClick={handleOpenModal}
        label={t('videoButtonTitle')}
        backgroundColor="bg-light"
      />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">{t('videoButtonTitle')}</h2>
          <button
            onClick={handleCloseModal}
            className=" text-gray-500 hover:text-gray-700 text-3xl"
          >
            ×
          </button>
        </div>

        <iframe
          width="100%"
          height="315"
          src={linkToVideo}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </Modal>
    </>
  );
};
