'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  ControlledInput,
  Select,
  TextArea,
} from 'clients-blogs-ui-kit';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { z } from 'zod';
import { Popup } from '@components/popup/popup';

import { sendSubscribeContacts } from '@/utils/sendSubscribeContacts';
import { contactsSchema } from '@/schemas';
import { useRelatedList } from '@/utils/hooks/useRelatedList';
import { PopupType } from '@/types/enums';

type ContactFormData = z.infer<typeof contactsSchema>;

export const ContactForm = () => {
  const t = useTranslations('contacts.formContact');
  const relatedList = useRelatedList();
  const [popup, setPopup] = useState<{
    message: string | null;
    type: PopupType;
  }>({
    message: null,
    type: PopupType.Success,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactsSchema),
    mode: 'onChange',
  });

  const handleAction = async (formData: ContactFormData) => {
    try {
      await sendSubscribeContacts(formData);
      setPopup({ message: t('successMessage'), type: PopupType.Success });
      reset();
    } catch {
      setPopup({ message: t('errorMessage'), type: PopupType.Error });
    }
  };

  const closePopup = () => setPopup({ message: null, type: PopupType.Success });
  const buttonLabel = isSubmitting
    ? t('loadSendButtonTitle')
    : t('sendButtonTitle');

  return (
    <>
      <form
        className="contact-form flex flex-col"
        onSubmit={handleSubmit(handleAction)}
      >
        <ControlledInput
          register={register('fullName')}
          type="text"
          placeholder={t('namePlaceholder')}
          disabled={isSubmitting}
          error={errors.fullName?.message}
        />
        <ControlledInput
          register={register('email')}
          type="email"
          placeholder={t('emailPlaceholder')}
          disabled={isSubmitting}
          error={errors.email?.message}
        />
        <Select
          register={register('related')}
          options={relatedList}
          placeholder={t('relatedPlaceholder')}
          error={errors.related?.message}
        />
        <TextArea
          register={register('message')}
          placeholder={t('messagePlaceholder')}
          disabled={isSubmitting}
          error={errors.message?.message}
        />
        <Button type="submit" label={buttonLabel} disabled={isSubmitting} />
      </form>
      <Popup
        isOpen={!!popup.message}
        message={popup.message}
        type={popup.type}
        onClose={closePopup}
      />
    </>
  );
};
