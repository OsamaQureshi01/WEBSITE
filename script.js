document.addEventListener("DOMContentLoaded", function() {
    var loader = document.getElementById("loader");
    var content = document.getElementById("content");

    // Wait until the entire page is loaded
    window.onload = function() {
        loader.style.display = "none";
        content.style.display = "block";
    }
});

// Show loader when navigating between pages
window.addEventListener("beforeunload", function() {
    document.getElementById("loader").style.display = "block";
});
