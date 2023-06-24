const url = 'https://getbooksinfo.p.rapidapi.com/?s=pride%20and%20prejudice';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '349fcd88d1msh32bfb9b22822cf3p1cc69bjsn7a4f19fc2bdc',
		'X-RapidAPI-Host': 'getbooksinfo.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}