// src/components/SearchResults.jsx
import React from "react";

const SearchResults = ({ results }) => {
  if (!results?.length) {
    return <p className="text-gray-500 mt-4">No results found.</p>;
  }

  return (
    <div className="mt-6 space-y-4">
      {results.map((email) => (
        <div
          key={email.id}
          className="border p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold">{email.subject}</h3>
          <p className="text-sm text-gray-600 mb-1">From: {email.from}</p>
          <p className="text-sm text-gray-700">{email.snippet}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
