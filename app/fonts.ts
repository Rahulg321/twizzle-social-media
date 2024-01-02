import { Montserrat, Philosopher, Playfair_Display } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const playfair_display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair_display',
  display: 'swap',
});

export const philospher = Philosopher({
  weight: ['400', '700'],
  variable: '--font-philospher',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
