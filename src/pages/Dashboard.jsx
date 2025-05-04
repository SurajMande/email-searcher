import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { FiFile, FiDownload, FiEye } from 'react-icons/fi';

const Dashboard = () => {
  // Sample data for file cards (replace with actual data from API or state)
  const recentFiles = [
    { id: 1, name: 'Project Proposal.pdf', type: 'PDF', size: '1.2 MB', date: '2025-05-03' },
    { id: 2, name: 'Meeting Notes.docx', type: 'DOCX', size: '245 KB', date: '2025-05-02' },
    { id: 3, name: 'Budget.xlsx', type: 'XLSX', size: '780 KB', date: '2025-05-01' },
    { id: 4, name: 'Presentation.pptx', type: 'PPTX', size: '3.5 MB', date: '2025-04-30' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Recent Files</h2>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none transition-all duration-200">
            <FiFile />
            Upload New
          </button>
        </div>

        {recentFiles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recentFiles.map((file) => (
              <div
                key={file.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <FiFile className="text-indigo-500 text-2xl" />
                    <h3 className="text-lg font-semibold text-gray-800 truncate">{file.name}</h3>
                  </div>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p>Type: {file.type}</p>
                    <p>Size: {file.size}</p>
                    <p>Date: {file.date}</p>
                  </div>
                </div>
                <div className="flex border-t border-gray-200">
                  <button
                    className="flex-1 flex items-center justify-center gap-2 py-3 text-sm text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
                    title="Preview"
                  >
                    <FiEye />
                    Preview
                  </button>
                  <button
                    className="flex-1 flex items-center justify-center gap-2 py-3 text-sm text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
                    title="Download"
                  >
                    <FiDownload />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <FiFile className="mx-auto text-5xl text-gray-400 mb-4" />
            <p className="text-gray-500 text-lg">You haven't searched anything yet.</p>
            <p className="text-gray-400 text-sm mt-2">Start by searching for files, emails, or links above.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;