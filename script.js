function switchMode(e) {
    const d = document.body.classList;
    d.contains("dark") ? (e.innerHTML = "☀️", d.remove("dark")) : (e.innerHTML = "🌙", d.add("dark"))
}
window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && (document.body.classList.add("dark"), document.querySelector("#theme-switch").innerHTML = "🌙");