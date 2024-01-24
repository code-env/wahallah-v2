import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Wahallah",
    template: "%s - Wahallah",
  },
  description: "Github collaboration has never been this easy",
  keywords: [
    "Bossadi Zenith",
    "Wahalla",
    "Wahala",
    "code-env",
    "Next.js",
    "React",
    "zenith-noble",
    "zenith-noble01",
    "JavaScript",
  ],
  authors: [
    { name: "Bossadi Zenith", url: "https://bossadizenith.vercel.app" },
  ],
  creator: "Bossadi Zenith",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen dark:bg-background dark:text-muted">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
