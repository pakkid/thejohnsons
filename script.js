function switchMode(e) {
    const d = document.body.classList;
    d.contains("dark") ? (e.innerHTML = "☀️", d.remove("dark")) : (e.innerHTML = "🌙", d.add("dark"))
}
window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && (document.body.classList.add("dark"), document.querySelector("#theme-switch").innerHTML = "🌙");


document.getElementById('copyMinecraftBtn').addEventListener('click', function (e) {
	e.preventDefault(); // Prevent default action of the anchor tag

	var btn = document.getElementById('copyMinecraftBtn');
	var originalHTML = '<span class="iconify-inline" data-icon="solar:clipboard-bold"></span>Minecraft IP'; // Set the original button HTML (icon + text)
	var minecraftServerIP = "mc.thejohnsons.net.nz"; // Replace with your actual server IP

	// If the button text is "Copied!", ignore further clicks
	if (btn.textContent === "Copied!") {
		return;
	}

	// Get original button width
	var originalWidth = btn.offsetWidth + 'px'; // Store the button's width

	// Use navigator.clipboard to copy the IP
	navigator.clipboard.writeText(minecraftServerIP).then(function() {
		// Change button text to "Copied!" and set the width to the original width
		btn.textContent = "Copied!";
		btn.style.width = originalWidth;

		// Revert back to the original HTML after 2 seconds
		setTimeout(function() {
			btn.innerHTML = originalHTML;
		}, 2000);
	}).catch(function(error) {
		console.error('Failed to copy: ', error);
	});
});

