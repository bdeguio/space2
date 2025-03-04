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
    pdfViewer.style.display = "block";
    pdfViewer.src = pdfFile; // Assumes the PDFs are stored in the same directory as index.html
}
