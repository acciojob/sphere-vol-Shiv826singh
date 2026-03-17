function volume_sphere() {
    // Get radius value
    let radius = document.getElementById("radius").value;

    // Convert to number
    radius = parseFloat(radius);

    let volume;

    // Validate input
    if (isNaN(radius) || radius < 0) {
        volume = NaN;
    } else {
        // Formula: (4/3) * π * r^3
        volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        volume = volume.toFixed(4);
    }

    // Display result
    document.getElementById("volume").value = volume;

    // Prevent form submission (page reload)
    return false;
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;