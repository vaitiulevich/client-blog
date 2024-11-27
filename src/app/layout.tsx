export const metadata = {
  title: 'Client blog',
  description: 'Client blog',
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Client blog</title>
      </head>
      <body>
        <>{children}</>
      </body>
    </html>
  );
}
