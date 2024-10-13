// EXERCISE 1: Selecting Elements
// TODO: Select the element with the ID 'mainTitle' and log it to the console.
const mainTitle = document.getElementById('mainTitle');
console.log(mainTitle);

// Exercise 2: Changing HTML Content
// TODO: Select all paragraph elements and change the content of the second paragraph to "This paragraph has been changed."
const paragraphs = document.querySelectorAll('p');
paragraphs[1].textContent = "This paragraph has been changed.";

// Exercise 3: Changing CSS Styles
// TODO: Select the first list item and change its text color to red
const firstListItem = document.querySelector('li');
firstListItem.style.color = 'red';

// Exercise 4: Adding/Removing Classes
// TODO: Add the "highlight" class to the first paragraph
// TODO: Remove the "highlight" class from the first paragraph after 3 seconds
paragraphs[0].classList.add('highlight');
setTimeout(() => {
paragraphs[0].classList.remove('highlight');
}, 3000);

// Exercise 5: Creating and Appending Elements
// TODO: Create a new list item with the text "Item 4" and append it to the existing list
const newItem = document.createElement('li');
newItem.textContent = 'Item 4';
const list = document.querySelector('ul');
list.appendChild(newItem);

// Exercise 6: Removing Elements
// TODO: Remove the last list item from the unordered list
const lastItem = list.lastElementChild;
list.removeChild(lastItem);

// Exercise 7: Handling Events
// TODO: Add a click event listener to the button that displays an alert saying "Button clicked!"
const button = document.getElementById('actionButton');
button.addEventListener('click', () => {
alert('Button clicked!');
});

// Exercise 8: Working with Input
// TODO: Add an input event listener to the input field that displays the current input value in the result div
const input = document.getElementById('inputField');
const result = document.getElementById('result');
input.addEventListener('input', () => {
result.textContent = input.value;
});

// Exercise 9: Toggling Visibility
// TODO: Add a click event listener to the button that toggles the visibility of the content div
const content = document.getElementById('content');
button.addEventListener('click', () => {
content.style.display = content.style.display === 'none' ? 'block' : 'none'; 
});

// Exercise 10: Modifying Attributes
// TODO: Select the input field and change its placeholder text to "Enter your name"
input.setAttribute('placeholder', 'Enter your name');
