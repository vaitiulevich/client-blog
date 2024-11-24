import { z } from 'zod';

export const contactsSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Must be 2 or more characters long' })
    .max(30, { message: 'Must be 50 or fewer characters long' }),
  email: z.string().email('Invalid email address'),
  related: z.string().nonempty({ message: 'Selection is required' }),
  message: z
    .string()
    .min(1, { message: 'Message is required' })
    .max(500, { message: 'Must be 500 or fewer characters long' }),
});

export const emailSchema = z.object({
  email: z.string().email('Invalid email'),
});
