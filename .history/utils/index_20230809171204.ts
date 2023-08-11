export async function fetchCars() {
  const headers = {
      'X-RapidAPI-Key': 'e10a102571msh0bc4c8435d8d172p148995jsnf30e3180cacc',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
  headers: headers
});

const result = await response.json()
return result
}