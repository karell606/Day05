const changeColorButton = document.querySelector('.cart-btn');
changeColorButton.textContent = "CHANGE COLOR";
 
changeColorButton.addEventListener('click', function() {

function getRandomColor() {
    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'light blue'];
    return colors[Math.floor(Math.random() * colors.length)];

}
 
   	 const randomColor = getRandomColor();

    document.body.style.backgroundColor = randomColor;

});
