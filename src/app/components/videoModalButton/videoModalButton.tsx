'use client';

import { useState } from 'react';
import { Modal } from '../modal/Modal';
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
        <h2 className="text-xl font-bold mb-4">{t('videoButtonTitle')}</h2>
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
