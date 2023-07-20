"use client";
import "react-loading-skeleton/dist/skeleton.css";
import "./globals.css";
import { useState } from "react";
import SearchResultPage from "@/components/SearchResult";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [query, setQuery] = useState("");
  return (
    <html lang="en">
      <body className="bg-dark">
        <div className="p-4 flex gap-8">
          <p className="text-darkRed font-extrabold text-3xl">MOVIEKU</p>
          <input
            className="bg-gray rounded-md text-white placeholder:text-white w-full px-4"
            placeholder="Search for movies.."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        {!!query ? <SearchResultPage query={query} /> : children}
      </body>
    </html>
  );
}
