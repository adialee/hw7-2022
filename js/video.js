var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	console.log("Auto play is set to false");
	video.loop = false;
	console.log("Video loop is set to false");
});
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let volume = document.querySelector("#slider").value;
	document.querySelector('#volume').innerHTML = volume + '%'; 
});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
	console.log('Slow down video');
	video.playbackRate *= 0.9;
	console.log('Speed is ' + video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function() {
	console.log('Speed up video');
	video.playbackRate /= 0.9;
	console.log('Speed is ' + video.playbackRate);
});
document.querySelector("#skip").addEventListener("click", function() {
	console.log('Skip ahead');
	video.currentTime += 10;
	console.log('Video current time is ' + video.currentTime);
	if (video.ended) {
		video.currentTime = 0;
		video.play();
	}
});
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted = false;
		document.querySelector('#mute').innerHTML = 'Mute';
		console.log('Unmute');
	}
	else{
		video.muted = true;
		document.querySelector('#mute').innerHTML = 'Unmute';
		console.log('Mute');
	}
});
document.querySelector("#slider").addEventListener("input", function() {
	let volume = Number(document.getElementById('slider').value);
	console.log('The current value is', volume / 100);
	document.querySelector('#volume').innerHTML = volume + '%';
	let divList = document.querySelectorAll('div');
	console.log(divList[1].querySelector('span'));
});
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
});
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});