import './globals.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ClientLayout from './components/ClientLayout';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: 'AGSuite - Cloud Solution Partner',
  description: 'AGSuite delivers tailored Zoho & NetSuite services to help you scale faster and smarter.',
  icons: {
    icon: '/agsuite_logo.webp',
    shortcut: '/agsuite_logo.webp',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <ClientLayout>
          {children}
        </ClientLayout>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
