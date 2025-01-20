const BASE_URL = 'https://private-95bb4-arnaz.apiary-mock.com/work-list'
export const getWorkList = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    
    const json = await response.json();
    return json.data
  } catch (error) {
    console.error(error)
  }
}