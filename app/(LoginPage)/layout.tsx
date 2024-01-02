import type { Metadata } from 'next';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
