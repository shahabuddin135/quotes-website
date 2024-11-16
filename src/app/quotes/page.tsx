"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { Marcellus } from 'next/font/google';

const marcellus = Marcellus({
  subsets: ['latin'],
  weight: '400',
});

export interface Quote {
  id: number;
  quote: string;
  author: string;
}

const Quotes = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch('https://dummyjson.com/quotes');
        if (!response.ok) throw new Error('Failed to fetch quotes');
        const data = await response.json();
        setQuotes(data.quotes);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  if (loading) {
    return <p>Loading quotes...</p>;
  }

  return (
    <div className={` ${marcellus.className} grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 m-auto`}>
      {quotes.map((quote) => (
        <Link href={`/quotes/${quote.id}`} key={quote.id}>
          <div className='shadow-lg rounded-md p-5 text-start hover:scale-110 active:opacity-65 cursor-pointer transition-all'>
            <p>
              <strong>Quote:</strong> {quote.quote.length > 100 ? `${quote.quote.slice(0, 100)}...` : quote.quote}
            </p>
            <p>
              <strong>Author:</strong> {quote.author}
            </p>
            <hr />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Quotes;
