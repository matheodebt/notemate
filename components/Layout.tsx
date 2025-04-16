// components/Layout.tsx
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header style={{ padding: '1rem', background: '#333', color: '#fff' }}>
        <h1>NoteMate 🧠</h1>
      </header>
      <main style={{ padding: '2rem' }}>{children}</main>
      <footer style={{ padding: '1rem', background: '#eee', textAlign: 'center' }}>
        <small>&copy; {new Date().getFullYear()} NoteMate - Tous droits réservés</small>
      </footer>
    </>
  );
}
