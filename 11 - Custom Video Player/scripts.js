/* Get our elements */
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const fullScreen = document.querySelector('.fullscreen');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

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
    video.currentTime += parseFloat(this.dataset.skip); //remember you need to convert the string to a number 
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';   //you can use this here because .pause is bind to video
    toggle.textContent = icon;
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

let full = false;

function fullscreen(){
    full = !full;
    if(full = true) {
        video.webkitRequestFullScreen();
    } else {
        video.webkitExitFullScreen();
    }
}
/* hook up event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay); 
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e)=> mousedown && scrub(e));
progress.addEventListener('mousedown', ()=> mousedown = true);
progress.addEventListener('mouseup', ()=> mousedown = false);
fullScreen.addEventListener('click', fullscreen);
