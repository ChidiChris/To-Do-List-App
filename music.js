const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');

menu.addEventListener('click', () => {
    logo.classList.toggle('isActive');
});



const inputBox = document.getElementById("input-box");
const listBox = document.getElementById("list-box");

function addTask(){
    if(inputBox.value === ''){
        alert("Idan is trying to add an invisible task, lol. Please write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listBox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData();
}

//For the click function

listBox.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

//This next function helps you to store the task on your browser.
//The task will still be visible even after you refresh your browser.

function saveData(){
    localStorage.setItem("data", listBox.innerHTML);
}

//This next function helps to display the data when next we open the browser again.

function showTask(){
    listBox.innerHTML = localStorage.getItem("data");
}
saveData();

// const song = document.querySelector('.song');
// const navLinks = document.querySelector('.nav-links');

// menu.addEventListener('click', () => {
//     navLinks.classList.toggle('isActive');
// });


const audioPlayer = document.querySelector("#audio-player");
const prevButton  = document.querySelector("#prev-button");
const playPauseButton  = document.querySelector("#play-pause-button")
const nextButton  = document.querySelector("#next-button");
const volumeSlider  = document.querySelector("#volume-slider")

// const playlist = [
//     {title: " song 1", src: ""}
// ]

function playTrack(index) {
    playlistitems.forEach((items) => {
        item.classList.remove("active");
    });

    playlistitems[index].classList.add("active");

    audioPlayer.src = playlistitems[index].querySelector("a").href;
    audioPlayer.play();
}

// Event listener for playlist buttons
playlistitems.forEach((items, index) => {
    items.addEventListener("click", () => {
        playTrack(index);
    });
});

// Play/pause button functionality
playPauseButton.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = "Pause";
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = "Play"
    }
});

// Previous button functionality
prevButton.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = playlistitems.length - 1;
    }
    playTrack(currentIndex);
});

// Next button functionality
nextButton.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= playlistitems.length) {
        currentIndex = 0;
    }
    playTrack(currentIndex);
});

// Volume slider functionality
volumeSlider.addEventListener("input", () => {
    audioPlayer.volume = volumeSlider.value;
});
