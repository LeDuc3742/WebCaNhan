// Toggle dark mode
const toggleBtn = document.getElementById('toggle-dark');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Ẩn preloader sau khi trang đã tải xong
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.display = "none";
  }
});

// Lightbox Image Zoom
document.querySelectorAll('.project-img').forEach(img => {
  img.addEventListener('click', function () {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = "block";
    lightboxImg.src = this.src;
  });
});

document.querySelector('.close').addEventListener('click', function () {
  document.getElementById('lightbox').style.display = "none";
});

// Đóng lightbox khi bấm ra ngoài ảnh
document.getElementById('lightbox').addEventListener('click', function (e) {
  if (e.target === this) {
    this.style.display = "none";
  }
});
