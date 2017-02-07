/* Get our elements */
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');

/* build out functions */
// const method = video.paused ? 'play' : 'pause;
// video[method]();

function togglePlay() {
    if(video.paused) {
      video.play();
    } else {
        video.pause();
    }
}

function skip() {
    console.log('skipping');
    video.currentTime += parseFloat(this.dataset.skip); 
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';   //you can use this here because .pause is bind to video
    console.log(icon);
    toggle.textContent = icon;
}
/* hook up event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay); 
skipButtons.forEach(button => button.addEventListener('click', skip));