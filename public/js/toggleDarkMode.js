function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
    localStorage.setItem('darkMode', body.classList.contains("dark-mode"));
}

window.onload = function() {
    if(localStorage.getItem('darkMode') === "true") {
        document.body.classList.add("dark-mode");
    }
}
