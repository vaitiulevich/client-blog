export const apiRequest = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  try {
    const url = process.env.NEXT_PUBLIC_BASE_URL + endpoint;
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Failed to fetch`);
    }

    return response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw new Error('An error occurred while fetching data.');
  }
};
