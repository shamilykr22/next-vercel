import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

// Parent layout page, its in defined insided the /app folder
// All the pages inside will have this default style
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
