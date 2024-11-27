const photoGrid = document.getElementById("photo-grid");

const images = {
    option1: [
        "https://via.placeholder.com/200/FF5733",
        "https://via.placeholder.com/200/33FF57",
        "https://via.placeholder.com/200/3357FF",
        "https://via.placeholder.com/200/FFFF33",
        "https://via.placeholder.com/200/FF33FF",
        "https://via.placeholder.com/200/33FFFF"
    ],
    option2: [
        "https://via.placeholder.com/200/FF0000",
        "https://via.placeholder.com/200/00FF00",
        "https://via.placeholder.com/200/0000FF",
        "https://via.placeholder.com/200/FFFF00",
        "https://via.placeholder.com/200/FF00FF",
        "https://via.placeholder.com/200/00FFFF"
    ],
    option3: [
        "https://via.placeholder.com/200/111111",
        "https://via.placeholder.com/200/222222",
        "https://via.placeholder.com/200/333333",
        "https://via.placeholder.com/200/444444",
        "https://via.placeholder.com/200/555555",
        "https://via.placeholder.com/200/666666"
    ],
    option4: [
        "https://via.placeholder.com/200/123456",
        "https://via.placeholder.com/200/654321",
        "https://via.placeholder.com/200/abcdef",
        "https://via.placeholder.com/200/fedcba",
        "https://via.placeholder.com/200/aaaaaa",
        "https://via.placeholder.com/200/bbbbbb"
    ],
};

function changeGrid(option) {
    photoGrid.innerHTML = ""; // Bersihkan grid
    images[option].forEach((imgSrc) => {
        const img = document.createElement("img");
        img.src = imgSrc;
        photoGrid.appendChild(img);
    });
}

// Set default grid
changeGrid("option1");
