// const menu = document.querySelector('.menu');
// const logo = document.querySelector('.logo');

// menu.addEventListener('click', () => {
//     logo.classList.toggle('isActive');
// });

// const inputBox = document.getElementById("input-box");
// const listBox = document.getElementById("list-box");

// function addTask(){
//     if(inputBox.value === ''){
//         alert("Idan is trying to add an invisible text, lol. Please write something!")
//     }
//     else{
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listBox.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     inputBox.value = "";
// }

// //For the click function

// listBox.addEventListener("click", function(e){
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//     }
//     else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//     }
// }, false);


const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');

menu.addEventListener('click', () => {
    logo.classList.toggle('isActive');
});

const inputBox = document.getElementById("input-box");
const listBox = document.getElementById("list-box");

function addTask(){
    if(inputBox.value === ''){
        alert("Idan is trying to add an invisible text, lol. Please write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listBox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
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
}, false);

function saveData(){
    localStorage.setItem("data", listBox.innerHTML);
}

function showTask(){
    listBox.innerHTML = localStorage.getItem("data");
}
saveData()


