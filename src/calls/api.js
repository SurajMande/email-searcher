import { searchEmails, getEmailDetails } from './googleService';

/**
 * Fetches and combines search results with email details.
 * @param {string} query - The search input from user.
 * @param {string} token - OAuth token.
 * @returns {Promise<Array>} - Array of full email data.
 */
export const fetchSearchResults = async (query, token) => {
  try {
    const messages = await searchEmails(query, token);

    // Limit results for performance in frontend
    const detailedMessages = await Promise.all(
      messages.slice(0, 5).map((msg) => getEmailDetails(msg.id, token))
    );

    return detailedMessages;
  } catch (err) {
    console.error("Error fetching search results:", err);
    return [];
  }
};
