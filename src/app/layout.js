// app/layout.js
"use client";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
        <header>
          <nav>
            <h1>My Blog App</h1>
            <a href="/api/auth/signout">Sign Out</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2024 My Blog App</footer>
        <style jsx>{`
          header {
            background-color: #333;
            color: white;
            padding: 15px;
            text-align: center;
          }
          footer {
            text-align: center;
            margin-top: 20px;
            padding: 10px;
            background-color: #333;
            color: white;
          }
          nav a {
            color: white;
            margin-left: 20px;
          }
          main {
            padding: 20px;
          }
        `}</style>
        </SessionProvider>
      </body>
    </html>
  );
}
