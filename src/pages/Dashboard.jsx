import { useSearch } from '../context/SearchContext';
import SearchResults from './SearchResults'; // Create this component below
import DashboardLayout from '../layouts/DashboardLayout';
import { FiFile } from 'react-icons/fi';

const Dashboard = () => {
  const { searchResults, loading } = useSearch();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {loading && <p className="text-gray-500 text-center">Searching...</p>}
        
        {searchResults.length > 0 ? (
          <SearchResults results={searchResults} />
        ) : (
          <div className="text-center py-12">
            <FiFile className="..." />
            <p className="text-gray-500 text-lg">You haven't searched anything yet.</p>
            <p className="text-gray-400 text-sm mt-2">Start by searching for files, emails, or links above.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;