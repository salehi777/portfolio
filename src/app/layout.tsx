import RegisterPWA from "@/components/register-pwa";
import MuiThemeProvider from "@/theme-provider";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Portfolio",
  },
  applicationName: "Portfolio",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "black",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio</title>
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@33.003/misc/UI/Vazirmatn-UI-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body dir="rtl">
        <RegisterPWA />
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  );
}
