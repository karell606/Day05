const paragraphs = document.querySelectorAll('p');
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Now featuring a headphone jack!';
paragraphs[paragraphs.length - 1].after(newParagraph);
