var video;

//Page load
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("video");

	video.autoplay = false; //Disable autoplay
	video.loop = false; //Disable looping
	console.log("Autoplay is set to false.");
	console.log("Loop is set to false.");

});

//Play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").textContent = video.volume*100+"%"; // Update current volume
});

//Pause button
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

//Slow down
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log("Speed is", video.playbackRate);
});

//Speed up
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
	video.playbackRate /= 0.9;
	console.log("Speed is", video.playbackRate);
});

//Skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
	}
	console.log("Video current time is", video.currentTime);
});

// Mute & Unmute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {
	  video.muted = true;
	  document.querySelector("#mute").textContent = "Unmute";
	  console.log("Mute");
	} else {
	  video.muted = false;
	  document.querySelector("#mute").textContent = "Mute";
	  console.log("Unmute");
	}
  });


