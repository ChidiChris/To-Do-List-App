


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
//     saveData();
// }

// //For the click function

// listBox.addEventListener("click", function(e){
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//         saveData();
//     }
//     else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         saveData();
//     }
// }, false);

// function saveData(){
//     localStorage.setItem("data", listBox.innerHTML);
// }

// function showTask(){
//     listBox.innerHTML = localStorage.getItem("data");
// }
// saveData()




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



const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');

menu.addEventListener('click', () => {
  logo.classList.toggle('isActive');
});

const inputBox = document.getElementById("input-box");
const listBox = document.getElementById("list-box");

function addTask() {
  const inputText = inputBox.value.trim(); // Trim leading/trailing whitespace

  if (!inputText) {
    alert("Please enter a task to add!");
    return; // Prevent creating an empty list item
  }

  const li = document.createElement("li");
  li.textContent = inputText; // Use textContent for better accessibility

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-btn");

  li.appendChild(deleteButton);
  listBox.appendChild(li);

  inputBox.value = "";
  saveData();
}

listBox.addEventListener("click", function(event) {
  const target = event.target;

  if (target.tagName === "LI") {
    target.classList.toggle("checked");
  } else if (target.classList.contains("delete-btn")) {
    target.parentElement.remove();
  }

  saveData();
});

function saveData() {
  localStorage.setItem("data", JSON.stringify(Array.from(listBox.querySelectorAll("li"))
    .map(li => ({ text: li.textContent, completed: li.classList.contains("checked") }))));
}

function showTask() {
  const storedTasks = JSON.parse(localStorage.getItem("data"));

  if (!storedTasks) return; // Handle empty localStorage

  const tasks = storedTasks.map(task => {
    const li = document.createElement("li");
    li.textContent = task.text;
    li.classList.toggle("checked", task.completed);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    li.appendChild(deleteButton);
    return li;
  });

  listBox.innerHTML = ""; // Clear existing content before adding new
  tasks.forEach(task => listBox.appendChild(task));
}

showTask(); // Call showTask to display existing tasks on page load

