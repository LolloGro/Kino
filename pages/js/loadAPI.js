export async function loadAPI(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new error('Couldnt fetch data');
    }
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.log(error);
  }
}









