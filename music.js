


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

// function saveData(){
//     localStorage.setItem("data", listBox.innerHTML);
// }

// function showTask(){
//     listBox.innerHTML = localStorage.getItem("data");
// }
// saveData()

function saveData() {
  const data = Array.from(listBox.children).map(li => li.outerHTML);
  localStorage.setItem("data", JSON.(data));
}

function showTask() {
  const data = JSON.parse(localStorage.getItemdata"));
  if (data) {
    data.forEach(html => {
      const li = document.createElement("li");
      li.innerHTML = html;
      listBox.appendChild(li);
    });
  }
}




// const menu = document.querySelector('.menu');
// const logo = document.querySelector('.logo');

// menu.addEventListener('click', () => {
//     logo.classList.toggle('isActive');
// });

// const inputBox = document.getElementById("input-box");
// const listBox = document.getElementById("list-box");

// function addTask() {
//     const task = inputBox.value.trim();
//     if (!task) {
//         alert("Please write something!");
//         return;
//     }
//     const li = document.createElement("li");
//     li.textContent = task;
//     const span = document.createElement("span");
//     span.textContent = "\u00d7";
//     li.appendChild(span);
//     listBox.appendChild(li);
//     inputBox.value = "";
//     saveData();
// }

// function saveData() {
//     const tasks = Array.from(listBox.children).map(li => li.outerHTML);
//     localStorage.setItem("data", JSON.stringify(tasks));
// }

// function showTask() {
//     const tasks = JSON.parse(localStorage.getItem("data"));
//     if (tasks) {
//         tasks.forEach(task => {
//             const li = document.createElement("li");
//             li.innerHTML = task;
//             listBox.appendChild(li);
//         });
//     }
// }

// listBox.addEventListener("click", function(e) {
//     const target = e.target;
//     if (target.tagName === "LI") {
//         target.classList.toggle("checked");
//         saveData();
//     } else if (target.tagName === "SPAN") {
//         target.parentElement.remove();
//         saveData();
//     }
// }, false);

// showTask();




