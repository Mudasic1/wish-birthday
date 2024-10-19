

// Get elements from the DOM
const wishPara = document.getElementById('wish-para');
const btn = document.getElementById('btn');
const input = document.getElementById('input1') as HTMLInputElement;
const wish = document.getElementById('wish');

// Ensure button and input exist before adding listeners
if (btn && input && wishPara && wish) {
  // Add event listener for the button click
  btn.addEventListener('click', () => {
    const name = input.value.trim();
    
    if (name) {
      // Set the wish message with the input name
     
      wishPara.innerText =  `Happy Birthday, ${name}! 🎉 Wishing you a day filled with joy, laughter, and unforgettable moments! May this special day bring you all the happiness in the world and mark the beginning of an amazing year ahead. Celebrate each moment and cherish the love and blessings surrounding you. Here's to new adventures, dreams coming true, and countless smiles. Happy Birthday!`; 
    } else {
      // Show a message if no name is provided
      wish.innerText = 'Please enter a name to wish!';
    }
  });
}
