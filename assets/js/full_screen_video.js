document.addEventListener('DOMContentLoaded', function () {
    const videoElement = document.getElementById('bg-video');
    videoElement.addEventListener('loadedmetadata', function () {
        videoElement.style.opacity = 1.0;
    });
});
