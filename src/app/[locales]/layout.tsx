import { NextIntlClientProvider } from 'next-intl';
import { Header } from '../components/header/header';
import '../globals.css';
import { getMessages } from 'next-intl/server';
import { Footer } from '../components/footer/footer';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
