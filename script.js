function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const text = document.getElementById("sidebar-text");
    const pdfList = document.getElementById("pdf-list");

    if (sidebar.classList.contains("expanded")) {
        sidebar.classList.remove("expanded");
        text.style.display = "none";
        pdfList.style.display = "none";
    } else {
        sidebar.classList.add("expanded");
        text.style.display = "block";
        pdfList.style.display = "block";
    }
}

function loadPdf(pdfFile) {
    const pdfViewer = document.getElementById("pdf-viewer");
    const closeBtn = document.getElementById("close-btn");
    const mainHeading = document.getElementById("main-heading");

    pdfViewer.style.display = "block";
    closeBtn.style.display = "block";
    mainHeading.style.display = "none"; // Hide heading when viewing PDF

    pdfViewer.src = pdfFile; // Assumes the PDFs are in the same directory as index.html
}

function closePdfViewer() {
    const pdfViewer = document.getElementById("pdf-viewer");
    const closeBtn = document.getElementById("close-btn");
    const mainHeading = document.getElementById("main-heading");

    pdfViewer.style.display = "none";
    closeBtn.style.display = "none";
    mainHeading.style.display = "block"; // Show heading again
}
