import { serviceId, templateId, userId } from '@/constants/emailsender';
import emailjs from 'emailjs-com';

interface sendSubscribeEmailParams {
  fullName: string;
  email: string;
  related: string;
  message: string;
}

export const sendSubscribeContacts = async ({
  fullName,
  email,
  related,
  message,
}: sendSubscribeEmailParams): Promise<void> => {
  await emailjs.send(
    serviceId,
    templateId,
    { reply_to: email, from_name: fullName, related, message },
    userId
  );
};
