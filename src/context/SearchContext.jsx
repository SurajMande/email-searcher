import { createContext, useContext, useState } from 'react';
import { fetchSearchResults } from '../calls/api';
import { useAuth } from './AuthContext';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const { user } = useAuth();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    if (!user?.token || !query) return;
    setLoading(true);
    try {
      const results = await fetchSearchResults( query, user.token);
      setSearchResults(results);
    } catch (error) {
      console.error('❌ Search failed in search context:', error);
    }
    setLoading(false);
  };

  return (
    <SearchContext.Provider value={{ searchResults, handleSearch, loading }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
