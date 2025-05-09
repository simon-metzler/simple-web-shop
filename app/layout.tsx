import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
