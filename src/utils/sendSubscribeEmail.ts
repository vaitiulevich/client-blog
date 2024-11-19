import emailjs from 'emailjs-com';

export const sendSubscribeEmail = async (email: string) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

  if (!serviceId || !templateId || !userId) {
    throw new Error('EmailJS configuration is missing.');
  }

  await emailjs.send(serviceId, templateId, { to_email: email }, userId);
};
