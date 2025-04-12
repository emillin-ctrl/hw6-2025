var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("video");

	video.autoplay = false; //Disable autoplay
	video.loop = false; //Disable looping
	console.log("Autoplay is set to false.");
	console.log("Loop is set to false.");

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();  // Play the video
	document.querySelector("#volume").textContent = video.volume; // Update current volume
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log("Speed is", video.playbackRate.toFixed(3));
});



