export default function QuoteCard({ quote }) {
  const date = new Date(quote.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
      <p className="text-gray-800 text-lg leading-relaxed italic">
        &ldquo;{quote.text}&rdquo;
      </p>
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
        <div>
          <p className="text-indigo-600 font-medium text-sm">— {quote.author}</p>
          {quote.category && quote.category !== 'General' && (
            <span className="inline-block mt-1 text-xs bg-indigo-50 text-indigo-500 px-2 py-0.5 rounded-full">
              {quote.category}
            </span>
          )}
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">{date}</p>
          {quote.createdBy?.name && (
            <p className="text-xs text-gray-400">by {quote.createdBy.name}</p>
          )}
        </div>
      </div>
    </div>
  );
}
