import { NextIntlClientProvider } from 'next-intl';
import { Header } from '@components/header/header';
import { getMessages } from 'next-intl/server';
import { Footer } from '@components/footer/footer';
import '../../styles/globals.css';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <ErrorBoundary>
        <Header />
        <main>{children}</main>
        <Footer />
      </ErrorBoundary>
    </NextIntlClientProvider>
  );
}
