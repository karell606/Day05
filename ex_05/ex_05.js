document.addEventListener("DOMContentLoaded", function() {
    const addToCartButton = document.getElementById("addToCart");
    if (addToCartButton) {
        addToCartButton.addEventListener("click", function() {
            alert("Thanks!");
        });
    }
});
