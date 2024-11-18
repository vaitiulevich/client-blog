const baseUrl = 'http://localhost:3001';

export async function apiRequest<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  try {
    const url = baseUrl + endpoint;
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.statusText} (status: ${response.status})`
      );
    }

    return response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw new Error('An error occurred while fetching data.');
  }
}
