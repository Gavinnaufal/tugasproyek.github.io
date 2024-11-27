// Ambil elemen
var modal = document.getElementById("modal");
var btn = document.getElementById("openModal");
var span = document.getElementById("closeModal");

// Ketika tombol diklik, buka pop-up
btn.onclick = function () {
  modal.style.display = "block";
};

// Ketika tombol 'x' di klik, tutup pop-up
span.onclick = function () {
  modal.style.display = "none";
};

// Ketika pengguna klik di luar pop-up, tutup pop-up
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var modal1 = document.getElementById("modal-1");
var btn1 = document.getElementById("openModal-1");
var span1 = document.getElementById("closeModal-1");

// Ketika tombol diklik, buka pop-up
btn1.onclick = function () {
  modal1.style.display = "block";
};

// Ketika tombol 'x' di klik, tutup pop-up
span1.onclick = function () {
  modal1.style.display = "none";
};

// Ketika pengguna klik di luar pop-up, tutup pop-up
window.onclick = function (event) {
  if (event.target == modal1) {
    modal.style.display = "none";
  } 
};

var modal2 = document.getElementById("modal-2");
var btn2 = document.getElementById("openModal-2");
var span2 = document.getElementById("closeModal-2");

// Ketika tombol diklik, buka pop-up
btn2.onclick = function () {
  modal2.style.display = "block";
};

// Ketika tombol 'x' di klik, tutup pop-up
span2.onclick = function () {
  modal2.style.display = "none";
};

// Ketika pengguna klik di luar pop-up, tutup pop-up
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

var modal3 = document.getElementById("modal-3");
var btn3 = document.getElementById("openModal-3");
var span3 = document.getElementById("closeModal-3");

// Ketika tombol diklik, buka pop-up
btn3.onclick = function () {
  modal3.style.display = "block";
};

// Ketika tombol 'x' di klik, tutup pop-up
span3.onclick = function () {
  modal3.style.display = "none";
};

// Ketika pengguna klik di luar pop-up, tutup pop-up
window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};

const popupOverlay = document.getElementById("popup-overlay");

function openPopup() {
    popupOverlay.classList.add("active"); // Tambahkan kelas 'active'
}

function closePopup() {
    popupOverlay.classList.remove("active"); // Hapus kelas 'active'
}

// Tutup pop-up jika klik di luar area konten
popupOverlay.addEventListener("click", function(event) {
    if (event.target === popupOverlay) {
        closePopup();
    }
});

