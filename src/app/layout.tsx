export const metadata = {
  title: 'Client blog',
  description: 'Client blog',
  icons: {
    icon: '/icon.ico',
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
        <link rel="icon" href="/icon.ico" sizes="any" />
        <title>Client blog</title>
      </head>
      <body>
        <>{children}</>
      </body>
    </html>
  );
}
