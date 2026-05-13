const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product");

searchInput.addEventListener("keyup", () => {

    let searchValue = searchInput.value.toLowerCase();

    products.forEach(product => {

        let productName = product.querySelector("h3").textContent.toLowerCase();

        if(productName.includes(searchValue)){
            product.style.display = "block";
        } else{
            product.style.display = "none";
        }

    });

});