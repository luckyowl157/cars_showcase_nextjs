const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}


export async function fetchCars() {
  const haaders = {
      'X-RapidAPI-Key': 'e10a102571msh0bc4c8435d8d172p148995jsnf30e3180cacc',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
}