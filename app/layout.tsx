import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Método Raíz TDAH',
  description: 'Sistema de liberación biológica en 5 pasos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <main className="min-h-screen max-w-4xl mx-auto p-6">
          {children}
        </main>
        <footer className="text-center p-4 text-xs text-gray-500 mt-8 border-t">
          <p>Este programa es una herramienta educativa y de acompañamiento emocional.</p>
          <p>No sustituye diagnóstico ni tratamiento médico.</p>
        </footer>
      </body>
    </html>
  );
}
