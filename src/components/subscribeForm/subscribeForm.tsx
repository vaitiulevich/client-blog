'use client';

import { Button, ControlledInput } from 'clients-blogs-ui-kit';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Popup } from '@components/popup/popup';

import { sendSubscribeEmail } from '@/utils/sendSubscribeEmail';
import { PopupType } from '@/types/enums';
import { useValidationSchemaFollow } from '@/utils/hooks/useValidationSchemaFollow';

type EmailFormData = z.infer<ReturnType<typeof useValidationSchemaFollow>>;
export const SubscribeForm = () => {
  const t = useTranslations('footer.formSubscribe');
  const emailSchema = useValidationSchemaFollow();
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
    type: PopupType;
  }>({
    message: null,
    type: PopupType.Success,
  });

  const handleAction = async (data: EmailFormData) => {
    setPopup({ message: null, type: PopupType.Success });

    try {
      await sendSubscribeEmail(data.email);
      setPopup({ message: t('successMessage'), type: PopupType.Success });
      reset();
    } catch {
      setPopup({ message: t('errorMessage'), type: PopupType.Error });
    }
  };

  const closePopup = () => setPopup({ message: null, type: PopupType.Success });

  return (
    <div className="relative">
      <Popup
        isOpen={!!popup.message}
        message={popup.message}
        type={popup.type}
        onClose={closePopup}
      />
      <form
        className="flex gap-4 items-start max-md:flex-col"
        onSubmit={handleSubmit(handleAction)}
      >
        <ControlledInput
          register={register('email')}
          type="text"
          placeholder={t('formInputPlaceholder')}
          disabled={isSubmitting}
          error={errors.email?.message}
        />
        <div className="w-[8rem]">
          <Button
            size="full"
            type="submit"
            label={
              isSubmitting ? t('loadSubmitButtonTitle') : t('submitButtonTitle')
            }
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
};
