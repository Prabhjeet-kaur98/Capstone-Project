function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.overlay');

    if (navLinks.style.right === "0px") {
        navLinks.style.right = "-100%";
        overlay.style.display = "none";
    } else {
        navLinks.style.right = "0";
        overlay.style.display = "block";
    }
}
