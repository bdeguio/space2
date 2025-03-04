document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggle-btn");
    const pdfViewer = document.getElementById("pdf-viewer");
    const mainHeading = document.getElementById("main-heading");
    const pdfLinks = document.querySelectorAll(".pdf-link");
    const closeBtn = document.getElementById("close-btn");

    toggleBtn.addEventListener("click", function() {
        sidebar.classList.toggle("expanded");
        if (sidebar.classList.contains("expanded")) {
            pdfViewer.style.left = "200px";
            pdfViewer.style.width = "calc(100vw - 200px)";
        } else {
            pdfViewer.style.left = "64px";
            pdfViewer.style.width = "calc(100vw - 64px)";
        }
    });

    pdfLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const pdfFile = this.getAttribute("data-pdf");
            pdfViewer.src = pdfFile;
            pdfViewer.style.display = "block";
            mainHeading.style.display = "none";
        });
    });

    closeBtn.addEventListener("click", function() {
        pdfViewer.style.display = "none";
        mainHeading.style.display = "block";
        pdfViewer.src = "";
    });
});
    
    pdfViewer.style.display = "none";
    mainHeading.style.display = "block";
    pdfViewer.src = "";
}
