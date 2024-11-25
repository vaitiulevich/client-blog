import { NextIntlClientProvider } from 'next-intl';
import { Header } from '@app/components/header/header';
import { getMessages } from 'next-intl/server';
import { Footer } from '@app/components/footer/footer';
import './globals.css';
import ErrorBoundary from '@app/components/ErrorBoundary/ErrorBoundary';

export const metadata = {
  title: 'Client blog',
  description: 'Client blog',
  icon: '/public/favicon.png',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  console.log('mes', messages);
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <title>Client blog</title>
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ErrorBoundary>
            <Header />
            <main>{children}</main>
            <Footer />
          </ErrorBoundary>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
