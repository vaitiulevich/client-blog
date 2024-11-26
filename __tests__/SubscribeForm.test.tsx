import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';
import { NextIntlClientProvider } from 'next-intl';
import { mockMessages } from './mockMessages';
import { SubscribeForm } from '@/components/subscribeForm/subscribeForm';
import { sendSubscribeEmail } from '@/utils/sendSubscribeEmail';

jest.mock('@/utils/sendSubscribeEmail', () => ({
  sendSubscribeEmail: jest.fn(),
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('SubscribeForm Component', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: '/',
      query: {},
    });

    render(
      <NextIntlClientProvider locale="en" messages={mockMessages}>
        <SubscribeForm />
      </NextIntlClientProvider>
    );
  });

  test('renders the form with email input and subscribe button', () => {
    expect(screen.getByPlaceholderText('Enter Your Email')).toBeInTheDocument();
    expect(screen.getByText('Subscribe')).toBeInTheDocument();
  });

  test('displays error message for invalid email', async () => {
    fireEvent.change(screen.getByPlaceholderText('Enter Your Email'), {
      target: { value: 'invalid-email' },
    });

    fireEvent.click(screen.getByText('Subscribe'));

    await waitFor(() => {
      expect(screen.getByText('Invalid email')).toBeInTheDocument(); // Assuming this is the validation error
    });
  });

  test('displays success popup on successful subscription', async () => {
    (sendSubscribeEmail as jest.Mock).mockResolvedValueOnce({}); // Mocking successful response

    fireEvent.change(screen.getByPlaceholderText('Enter Your Email'), {
      target: { value: 'test@example.com' },
    });

    fireEvent.click(screen.getByText('Subscribe'));

    await waitFor(() => {
      expect(screen.getByText('Subscription successful!')).toBeInTheDocument(); // Check success message
    });
  });

  test('displays error popup on subscription failure', async () => {
    (sendSubscribeEmail as jest.Mock).mockRejectedValueOnce(
      new Error('Network error')
    );

    fireEvent.change(screen.getByPlaceholderText('Enter Your Email'), {
      target: { value: 'test@example.com' },
    });

    fireEvent.click(screen.getByText('Subscribe'));

    await waitFor(() => {
      expect(
        screen.getByText('Failed to send. Please try again.')
      ).toBeInTheDocument();
    });
  });
});
