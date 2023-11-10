import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aery",
  description: "A simple weather app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
          disableGutters
          fixed
          maxWidth="sm"
        >
          {children}
        </Container>
      </body>
    </html>
  );
}
