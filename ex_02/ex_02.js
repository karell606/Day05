const paragraphs = document.querySelectorAll('p');
paragraphs.forEach((paragraph, index) => {
  paragraph.textContent = index + 1;
});
