import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { z } from 'zod';

export const useValidationSchemaContact = () => {
  const t = useTranslations('validation');

  const contactsSchema = useMemo(
    () =>
      z.object({
        fullName: z
          .string()
          .min(2, { message: t('fullName.min') })
          .max(30, { message: t('fullName.max') }),
        email: z.string().email(t('email')),
        related: z.string().nonempty({ message: t('related') }),
        message: z
          .string()
          .min(1, { message: t('message.min') })
          .max(500, { message: t('message.max') }),
      }),
    [t]
  );

  return contactsSchema;
};
