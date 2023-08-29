//your JS code here. If required.
const button = document.getElementById('btn');
button.addEventListener('click', displayDelayedMessage);
async function displayDelayedMessage() {
	const textInput = document.getElementById('text');
    const delayInput = document.getElementById('delay');
    const outputDiv = document.getElementById('output');
    const message = textInput.value;
    const delay = delayInput.value;
	if (!message || delay <= 0) {
		outputDiv.textContent = 'Please enter a valid message and delay.';
		return;
	}
	await new Promise(resolve => setTimeout(resolve, delay));
	outputDiv.textContent = message;
}
