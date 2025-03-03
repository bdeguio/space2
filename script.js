function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const text = document.getElementById("sidebar-text");
    const nameList = document.getElementById("name-list");
    const epubList = document.getElementById("epub-list");

    if (sidebar.classList.contains("expanded")) {
        sidebar.classList.remove("expanded");
        text.style.display = "none";
        nameList.style.display = "none";
        epubList.style.display = "none";
    } else {
        sidebar.classList.add("expanded");
        text.style.display = "block";
        nameList.style.display = "block";
        epubList.style.display = "block";
    }
}

function loadEpub(epub) {
    const epubViewer = document.getElementById("epub-viewer");
    epubViewer.style.display = "block";

    if (epub === "epub1") {
        epubViewer.src = "path/to/your/epub1.html"; // Replace with the actual path
    } else if (epub === "epub2") {
        epubViewer.src = "path/to/your/epub2.html"; // Replace with the actual path
    }
}
