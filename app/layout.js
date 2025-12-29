import "./globals.css";

export const metadata = {
  title: "FOOD ABOUT YOU LIMITED",
  description: "Company profile of FOOD ABOUT YOU LIMITED",
  metadataBase: new URL("https://food-about-you.vercel.app"),
  verification: {
    google: "8HIQql0LY8yqQAbCyWDF-lOqrRGBzKsTohNY6AzOlbQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="min-h-screen flex flex-col">
        <div className="grid-overlay" />
        {children}
      </body>
    </html>
  );
}

