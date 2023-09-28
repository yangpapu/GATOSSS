const loadButton = document.getElementById("loadButton");
const catImage = document.getElementById("catImage");

loadButton.addEventListener("click", () => {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then((data) => {
            if (data && data[0] && data[0].url) {
                catImage.src = data[0].url;
            }
        })
        .catch((error) => {
            console.error("Error al cargar la imagen del gato:", error);
        });
});
