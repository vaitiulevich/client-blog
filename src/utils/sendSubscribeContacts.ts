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
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_CONTACTS_TEMPLATE_ID!;
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

  await emailjs.send(
    serviceId,
    templateId,
    { reply_to: email, from_name: fullName, related, message },
    userId
  );
};
