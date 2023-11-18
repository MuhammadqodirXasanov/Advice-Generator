const API = 'https://api.adviceslip.com/advice';
const dice = document.querySelector('.dice');
const id = document.getElementById('id');
const quote = document.querySelector('.quote');

async function generateAdvice() {
	const resp = await fetch(API);
	const data = await resp.json();

	return data;
}

generateAdvice()
	.then((data) => {
		id.innerHTML = data.slip.id;
		quote.innerHTML = `"${data.slip.advice}"`;
	})
	.catch((err) => err);

dice.addEventListener('click', () => {
	generateAdvice()
		.then((data) => {
			quote.innerHTML = `"${data.slip.advice}"`;
			id.innerHTML = data.slip.id;
		})
		.catch((err) => err);
});
