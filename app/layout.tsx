import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
