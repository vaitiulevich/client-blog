import { emailTemplateId, serviceId, userId } from '@/constants/emailsender';
import emailjs from 'emailjs-com';

export const sendSubscribeEmail = async (email: string) => {
  const isNotValidConfig = !serviceId || !emailTemplateId || !userId;

  if (isNotValidConfig) {
    throw new Error('EmailJS configuration is missing.');
  }

  await emailjs.send(serviceId, emailTemplateId, { to_email: email }, userId);
};
