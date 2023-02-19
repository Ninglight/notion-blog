import './globals.css'
import { AnalyticsWrapper } from './components/analytics';
import { Header } from './components/header/header.component';
import { ScrollTop } from './components/scroll-top/scroll-top.component';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ScrollTop />
        <Header />
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}