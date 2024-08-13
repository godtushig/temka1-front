import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';
import localFont from '@next/font/local';
import { Providers } from './providers';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Navbar } from '@/components/navbar';
import Footer from '@/components/footer';

const oktaNeue = localFont({
  src: [
    {
      path: '../public/fonts/OktaNeue-Thin.ttf',
      weight: '100',
    },
    {
      path: '../public/fonts/OktaNeue-ExtraLight.ttf',
      weight: '200',
    },
    {
      path: '../public/fonts/OktaNeue-Light.ttf',
      weight: '300',
    },
    {
      path: '../public/fonts/OktaNeue-Normal.ttf',
      weight: '400',
    },
    {
      path: '../public/fonts/OktaNeue-Medium.ttf',
      weight: '500',
    },
    {
      path: '../public/fonts/OktaNeue-SemiBold.ttf',
      weight: '600',
    },
    {
      path: '../public/fonts/OktaNeue-Bold.ttf',
      weight: '700',
    },
    {
      path: '../public/fonts/OktaNeue-Black.ttf',
      weight: '900',
    },
  ],
  variable: '--font-oktaNeue',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${oktaNeue.variable} font-sans`}
    >
      <head />
      <body className={clsx('min-h-screen antialiased', fontSans.variable)}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col h-full">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            {/* <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">NextUI</p>
              </Link> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
