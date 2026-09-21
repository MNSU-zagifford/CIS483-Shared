const button = document.getElementById('changeTextButton');
const removeButton = document.getElementById('removeElementButton');
const text = document.getElementById('textToChange');
const outputArea = document.getElementById('outputArea');

button.addEventListener('click', () => {
	text.textContent = 'The text has been changed!';
	text.style.color = 'blue';
	outputArea.textContent = '';

	if (!document.getElementById('newElement')) {
		const newElement = document.createElement('p');
		newElement.id = 'newElement';
		newElement.textContent = 'This is the new element.';
		outputArea.appendChild(newElement);
	}
});

removeButton.addEventListener('click', () => {
	const newElement = document.getElementById('newElement');
	if (newElement) {
		newElement.remove();
	}
	outputArea.textContent = '';
});