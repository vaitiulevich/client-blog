'use client';

import { Button, ControlledInput } from 'clients-blogs-ui-kit';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Popup } from '@app/components/popup/popup';
import { sendSubscribeEmail } from '@/utils/sendSubscribeEmail';

const emailSchema = z.object({
  email: z.string().email('Invalid email'),
});

type EmailFormData = z.infer<typeof emailSchema>;

export const SubscribeForm = () => {
  const t = useTranslations('footer.formSubscribe');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const [popup, setPopup] = useState<{
    message: string | null;
    type: 'success' | 'error';
  }>({
    message: null,
    type: 'success',
  });

  const handleAction = async (data: EmailFormData) => {
    setPopup({ message: null, type: 'success' });

    try {
      await sendSubscribeEmail(data.email);
      setPopup({ message: t('successMessage'), type: 'success' });
      reset();
    } catch (error) {
      console.error(error);
      setPopup({ message: t('errorMessage'), type: 'error' });
    } finally {
    }
  };

  const closePopup = () => setPopup({ message: null, type: 'success' });

  return (
    <div className="relative">
      <Popup
        isOpen={!!popup.message}
        message={popup.message}
        type={popup.type}
        onClose={closePopup}
      />
      <form
        className="flex gap-4 items-start"
        onSubmit={handleSubmit(handleAction)}
      >
        <ControlledInput
          register={register('email')}
          type="email"
          placeholder={t('formInputPlaceholder')}
          disabled={isSubmitting}
          error={errors.email?.message}
        />
        <Button
          type="submit"
          label={
            isSubmitting ? t('loadSubmitButtonTitle') : t('submitButtonTitle')
          }
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
};