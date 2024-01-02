import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { playfair_display, montserrat } from '../fonts';
import Sidebar from '@/components/Sidebar/sidebar';
import Header from '@/components/Header/header';

const inter = Inter({ subsets: ['latin'] });
import Providers from '@/lib/ThemeProvider';

export const metadata: Metadata = {
  title: 'Twizzle - Connect, Share, and Explore',
  description:
    'Join Twizzle, your ultimate social media destination! Connect with friends, share your moments, and explore a vibrant community. Welcome to a world of endless possibilities and meaningful connections.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair_display.variable} ${montserrat.variable} `}
    >
      <body className={inter.className}>
        <main>
          <Providers>
            <div className="parent-container">
              <Sidebar />
              <Header />

              <div className="main">{children}</div>
            </div>
          </Providers>
        </main>
      </body>
    </html>
  );
}
