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

function updateButton() {
    console.log('update button');
}
/* hook up event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
toggle.addEventListener('click', togglePlay);