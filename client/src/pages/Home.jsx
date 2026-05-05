import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';
import QuoteCard from '../components/QuoteCard';
import Navbar from '../components/Navbar';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user } = useAuth();
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get('/quotes')
      .then(({ data }) => setQuotes(data))
      .catch(() => toast.error('Failed to load quotes'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Inspirational Quotes</h2>
          <p className="text-gray-500 mt-2">
            {quotes.length} quote{quotes.length !== 1 ? 's' : ''} shared by the community
          </p>
          {user && (
            <Link
              to="/create"
              className="mt-4 inline-block bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              + Share a Quote
            </Link>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : quotes.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-5xl mb-4">📜</p>
            <p className="text-xl font-medium">No quotes yet</p>
            <p className="mt-1">Be the first to share an inspiring quote!</p>
            {!user && (
              <Link to="/login" className="mt-4 inline-block text-indigo-600 font-medium hover:underline">
                Login to add quotes →
              </Link>
            )}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {quotes.map((q) => (
              <QuoteCard key={q._id} quote={q} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
