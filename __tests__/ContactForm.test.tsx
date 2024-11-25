import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { mockMessages } from './mockMessages';
import { ContactForm } from '@/app/components/contactForm/contactForm';
import { sendSubscribeContacts } from '@/utils/sendSubscribeContacts';
import { useRelatedList } from '@/utils/hooks/useRelatedList';

jest.mock('@/utils/sendSubscribeContacts', () => ({
  sendSubscribeContacts: jest.fn(),
}));

jest.mock('@/utils/hooks/useRelatedList', () => ({
  useRelatedList: jest.fn(),
}));

describe('ContactForm Component', () => {
  beforeEach(() => {
    (useRelatedList as jest.Mock).mockReturnValue([
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ]);

    render(
      <NextIntlClientProvider locale="en" messages={mockMessages}>
        <ContactForm />
      </NextIntlClientProvider>
    );
  });

  test('renders the contact form with inputs and button', () => {
    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument();
    expect(screen.getByText('Send Message')).toBeInTheDocument();
  });

  test('displays error message for invalid inputs', async () => {
    fireEvent.change(screen.getByPlaceholderText('Full Name'), {
      target: { value: 't' },
    });
    fireEvent.change(screen.getByPlaceholderText('Your Email'), {
      target: { value: 'invalid-email' },
    });

    fireEvent.click(screen.getByText('Send Message'));

    await waitFor(() => {
      expect(
        screen.getByText('Must be 2 or more characters long')
      ).toBeInTheDocument();
      expect(screen.getByText('Invalid email address')).toBeInTheDocument();
    });
  });

  test('displays success popup on successful submission', async () => {
    (sendSubscribeContacts as jest.Mock).mockResolvedValueOnce({});

    fireEvent.change(screen.getByPlaceholderText('Full Name'), {
      target: { value: 'Test test' },
    });
    fireEvent.change(screen.getByPlaceholderText('Your Email'), {
      target: { value: 'test@example.com' },
    });
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, {
      target: { value: 'company' },
    });
    fireEvent.change(screen.getByPlaceholderText('Message'), {
      target: { value: 'Hello!' },
    });

    fireEvent.click(screen.getByText('Send Message'));

    await waitFor(() => {
      expect(screen.getByText('Subscription successful!')).toBeInTheDocument();
    });
  });
});
