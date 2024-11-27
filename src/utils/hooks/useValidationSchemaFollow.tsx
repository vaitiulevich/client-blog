import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { z } from 'zod';

export const useValidationSchemaFollow = () => {
  const t = useTranslations('validation');

  const emailSchema = useMemo(
    () =>
      z.object({
        email: z.string().email(t('email')),
      }),
    [t]
  );

  return emailSchema;
};
