function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const pdfList = document.getElementById("pdf-list");

    if (sidebar.classList.contains("expanded")) {
        sidebar.classList.remove("expanded");
        pdfList.style.display = "none";
    } else {
        sidebar.classList.add("expanded");
        pdfList.style.display = "block"; // Ensure the PDF list is displayed
    }
}

function loadPdf(pdfFile) {
    const pdfViewer = document.getElementById("pdf-viewer");
    const mainHeading = document.getElementById("main-heading");

    pdfViewer.style.display = "block";
    mainHeading.style.display = "none"; // Hide heading when a PDF is opened

    pdfViewer.src = pdfFile; // Load the selected PDF
}

function closePdfViewer() {
    const pdfViewer = document.getElementById("pdf-viewer");
    const mainHeading = document.getElementById("main-heading");

    pdfViewer.style.display = "none";
    mainHeading.style.display = "block"; // Show heading again when closing PDF

    pdfViewer.src = ""; // Reset the iframe source
}
