// Example: Play/pause a video on click
const video = document.querySelector('#myVideo'); 
const button = document.querySelector('#playButton');

button.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});
// Play/pause video script (from above)