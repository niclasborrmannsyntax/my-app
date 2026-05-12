import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="flex flex-col min-h-screen font-serif">
        <header className="bg-zinc-200 dark:bg-gray-900 px-8 py-4 text-start font-bold text-2xl">
          <h1>Dog Images</h1>
        </header>

        <main className="p-8 min-h-[65vh]">{children}</main>

        <footer className="bg-zinc-200 dark:bg-gray-900 p-4 text-center mt-auto">
          © 2026 Syntax
        </footer>
      </body>
    </html>
  );
}
