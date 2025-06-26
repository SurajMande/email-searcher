
/**
 * Searches Gmail for a query string and returns message metadata.
 * @param {string} query - Gmail search query (e.g., "invoice from:google.com").
 * @param {string} token - OAuth access token.
 * @returns {Promise<Array>} - Array of basic message data (IDs).
 */
export const searchEmails = async (query, token) => {
    const url = `https://gmail.googleapis.com/gmail/v1/users/me/messages?q=${encodeURIComponent(query)}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!response.ok) {
      throw new Error(`Failed to search emails: ${response.status}`);
    }
  
    const result = await response.json();
    return result.messages || [];
  };
  
  /**
   * Fetches the full details of a single Gmail message.
   * @param {string} messageId - Gmail message ID.
   * @param {string} token - OAuth access token.
   * @returns {Promise<Object>} - Email subject and snippet.
   */
  export const getEmailDetails = async (messageId, token) => {
    const url = `https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!response.ok) {
      throw new Error(`Failed to get email details: ${response.status}`);
    }
  
    const message = await response.json();
    const headers = message.payload.headers;
  
    const subject =
      headers.find((h) => h.name.toLowerCase() === "subject")?.value ||
      "(No Subject)";
    const from =
      headers.find((h) => h.name.toLowerCase() === "from")?.value ||
      "(No Sender)";
  
    return {
      id: messageId,
      subject,
      from,
      snippet: message.snippet,
    };
  };
  