
function resizeIframe() {
    const iframe = document.getElementById("hiddenFrame");
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}

window.addEventListener("DOMContentLoaded", function () {
    // Replace 'YOUR_URL_HERE' with the URL of the website you want to embed
    const targetUrl = 'https://shorturl.at/dhHQY';
    
    // Get the iframe element by its id
    const iframe = document.getElementById("hiddenFrame");

    // Set the source URL of the iframe
    iframe.src = targetUrl;
});
