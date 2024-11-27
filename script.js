// Ambil elemen
var modal = document.getElementById("modal");
var btn = document.getElementById("openModal");
var span = document.getElementById("closeModal");

// Ketika tombol diklik, buka pop-up
btn.onclick = function() {
    modal.style.display = "block";
}

// Ketika tombol 'x' di klik, tutup pop-up
span.onclick = function() {
    modal.style.display = "none";
}

// Ketika pengguna klik di luar pop-up, tutup pop-up
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
