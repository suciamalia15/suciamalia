const form = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector('#notes');

input.addEventListener('change', (e) => {
	console.log('Nilai berubah');
})

input.addEventListener('input', (e) => {
	console.log('Nilai berhasil diinput');
})

form.addEventListener('submit', function (e) {
	e.preventDefault();
	const noteValue = input.value;
	const newList = document.createElement('li');
	newList.innerText = noteValue;
	list.append(newList);
	input.value = '';
});
