const button = document.getElementById('btn-start');
const innerCircle = document.getElementById('inner-circle8');
//var audio = document.querySelector('audio');
var audio = new Audio('maiden.mp3');
var growInterval;
var Timeout;
var finalTime;
var stopTimeout;

//to stop the interval,without removing the classes, transform scale will not run, so remove the classes
const stopInterval = () => {	
	innerCircle.classList.remove('grow');
	innerCircle.classList.remove('shrink');
	clearTimeout(Timeout)
}

// to shrink the circle 
function shrink() {
	// body...
	breatheP.textContent = 'Exhale slowly...'
	innerCircle.classList.add('shrink');
	// clearInterval(Interval);
}

//to grow the circle
function grow(){
	// body...
	audio.play();
	innerCircle.classList.add('grow');
	breatheP.textContent = 'Breathe in...'
	Timeout = setTimeout(shrink, 7000);
    stopTimeout = setTimeout(stopInterval, 16000);
}
//To stop the audio
const stopAudio = () => {
	audio.pause()
    audio.currentTime = 0
}
//To stop meditation,
const stop = () => {
    stopInterval();
    clearTimeout(stopTimeout)
    clearInterval(growInterval);
    clearTimeout(finalTime)
	stopAudio();
    breatheP.textContent = 'Just breathe...'
    button.disabled = false;
   button.removeEventListener('click', stop)
   button.addEventListener('click', expand)
 }

 // grow, grow every 18secs, stop after 85secs or 5grows
const expand = () => {
	grow();
   growInterval = setInterval(grow, 17000);
   finalTime =setTimeout(stop,  68000);
    button.disabled = true;
    button.removeEventListener('click', expand)
    button.addEventListener('click', stop)
}


















// // // }
//  const expand = () => setInterval(grow, 10000)




//  stress.addEventListener('click', function() {
// 	// body...
// 	audio.setAttribute(src, "Sleep Away.mp3")
// })






















