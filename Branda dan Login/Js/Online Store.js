function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.getElementById('datetime').innerHTML = `${date} ${time}`;
}

// Memperbarui tanggal dan waktu setiap detik
setInterval(updateDateTime, 1000);

// Memperbarui tanggal dan waktu saat halaman dimuat pertama kali
updateDateTime();

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.navbar-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
