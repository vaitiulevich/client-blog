'use client';

import { Button, ControlledInput } from 'clients-blogs-ui-kit';
import Form from 'next/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useFormStatus } from 'react-dom';
import emailjs from 'emailjs-com';
import { useTranslations } from 'next-intl';

const emailSchema = z.object({
  email: z.string().email('Invalid email'),
});

type EmailFormData = z.infer<typeof emailSchema>;

export const SubscribeForm = () => {
  const { pending } = useFormStatus();
  const t = useTranslations('footer.formSubscribe');
  const {
    register,
    reset,
    formState: { errors },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const handleAction = async (formData: FormData) => {
    const email = formData.get('email') as string;

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

      await emailjs.send(serviceId, templateId, { to_email: email }, userId);

      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form className="flex items-start h-16 gap-4" action={handleAction}>
      <ControlledInput
        {...register('email')}
        type="email"
        placeholder={t('formInputPlaceholder')}
        disabled={pending}
        error={errors.email ? errors.email.message : undefined}
      />
      <Button
        type="submit"
        label={pending ? t('loadSubmitButtonTitle') : t('submitButtonTitle')}
        disabled={pending}
      />
    </Form>
  );
};
