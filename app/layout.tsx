import '@/app/ui/global.css';

import { inter } from '@/app/ui/fonts';
//元数据
import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Acme karl Dashboard',
//   description: 'The official Next.js Course Dashboard, built with App Router karl.',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };
 
//添加模板
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',//占位符 
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}</body>
    </html>
  );
}
