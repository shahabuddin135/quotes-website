"use client";

import { useEffect, useState } from 'react';
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

const QuoteDetail = ({ params }: { params: { quotesid: string } }) => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/quotes/${params.quotesid}`);
        if (!response.ok) throw new Error('Failed to fetch quote');
        const data = await response.json();
        setQuote(data);
      } catch (error) {
        console.error('Error fetching quote:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, [params.quotesid]);

  if (loading) {
    return <p>Loading quote details...</p>;
  }

  if (!quote) {
    return <p>No quote found.</p>;
  }

  return (
    <div className={`flex justify-center text-center items-center h-screen flex-col ${marcellus.className} gap-5 mx-10`}>
      <p className='text-4xl leading-10'>
        &quot;{quote.quote}&quot;
      </p>
      <p className='text-2xl'>
        <strong>{quote.author}</strong> 
      </p>
    </div>
  );
};

export default QuoteDetail;
