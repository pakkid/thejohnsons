function switchMode(e) {
    const d = document.body.classList;
    d.contains("dark") ? (e.innerHTML = "☀️", d.remove("dark")) : (e.innerHTML = "🌙", d.add("dark"))
}
window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && (document.body.classList.add("dark"), document.querySelector("#theme-switch").innerHTML = "🌙");


document.getElementById('copyMinecraftBtn').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default behavior

    var btn = document.getElementById('copyMinecraftBtn');
    var originalHTML = '<span class="iconify-inline" data-icon="solar:clipboard-bold"></span>Minecraft IP'; // Original content (icon + text)
    var copiedHTML = 'Copied!'; // The content when IP is copied
    var minecraftServerIP = "mc.thejohnsons.net.nz"; // Replace with your actual server IP

    // If button is already showing "Copied!", ignore the click
    if (btn.innerHTML === copiedHTML) {
        return;
    }

    // Store the original button's width
    var originalWidth = btn.offsetWidth + 'px'; // Store the original button's width

    // Use navigator.clipboard to copy the IP
    navigator.clipboard.writeText(minecraftServerIP).then(function() {
        // Change button content to "Copied!" and update the style
        btn.innerHTML = copiedHTML;
        btn.style.width = originalWidth; // Keep width consistent

        // Revert back to the original HTML after 2 seconds
        setTimeout(function() {
            btn.innerHTML = originalHTML;
            btn.style.width = 'auto'; // Reset width
        }, 2000);
    }).catch(function(error) {
        console.error('Failed to copy: ', error);
    });
});
