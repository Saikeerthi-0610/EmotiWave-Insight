import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../contexts/AuthContext";

export const metadata: Metadata = {
  title: "EmotiWave Insight",
  description: "AI-Powered Neural Analysis Platform",
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="0.9em" font-size="90">🧠</text></svg>',
        type: 'image/svg+xml',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
