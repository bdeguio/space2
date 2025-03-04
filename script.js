function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const pdfViewer = document.getElementById("pdf-viewer");
    
    if (sidebar.classList.contains("expanded")) {
        sidebar.classList.remove("expanded");
        pdfViewer.style.left = "64px";
        pdfViewer.style.width = "calc(100vw - 64px)";
    } else {
        sidebar.classList.add("expanded");
        pdfViewer.style.left = "200px";
        pdfViewer.style.width = "calc(100vw - 200px)";
    }
}

function loadPdf(pdfFile) {
    const pdfViewer = document.getElementById("pdf-viewer");
    const mainHeading = document.getElementById("main-heading");
    
    pdfViewer.style.display = "block";
    mainHeading.style.display = "none";
    pdfViewer.src = pdfFile;
}

function closePdfViewer() {
    const pdfViewer = document.getElementById("pdf-viewer");
    const mainHeading = document.getElementById("main-heading");
    
    pdfViewer.style.display = "none";
    mainHeading.style.display = "block";
    pdfViewer.src = "";
}
