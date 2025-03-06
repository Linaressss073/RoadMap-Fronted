const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");

    // Guardar preferencia en localStorage
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
};

// Aplicar la preferencia al cargar la página
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}
