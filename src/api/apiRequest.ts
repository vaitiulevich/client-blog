export const apiRequest = async (
  endpoint: string,
  options?: RequestInit
): Promise<Response> => {
  try {
    const url = process.env.NEXT_PUBLIC_BASE_URL + endpoint;
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }

    return response;
  } catch (error) {
    console.error('API request error:', error);
    throw new Error('An error occurred while fetching data.');
  }
};
