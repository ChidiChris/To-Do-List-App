const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');

menu.addEventListener('click', () => {
    logo.classList.toggle('isActive');
});

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
    
//     // saveData();
// }

// //For the click function

// listBox.addEventListener("click", function(e){
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//         // saveData();
//     }
//     else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         // saveData();
//     }
// }, false)

// // // This next function helps you to store the task on your browser.
// // // The task will still be visible even after you refresh your browser.

// // document.addEventListener('DOMContentLoaded', () => {
// //   const inputBox = document.getElementById('input-box');
// //   const listBox = document.getElementById('list-box');

// //   Load tasks from local storage
// //   const savedTasks = localStorage.getItem('tasks');
// //   if (savedTasks) {
// //     listBox.innerHTML = savedTasks;
// //   }

  // Add task to list and save to local storage
  function addTask() {
    if (inputBox.value === '') {
      alert("Please write something!");
    } else {
      const li = document.createElement('li');
      li.innerHTML = inputBox.value;
      listBox.appendChild(li);
      let span = document.createElement('span');
      span.innerHTML = '\u00d7';
      li.appendChild(span);
      inputBox.value = '';

      Save task to local storage
      saveData();
    }
  }

  // Save tasks to local storage
  function saveData() {
    localStorage.setItem('tasks', listBox.innerHTML);
  }

  // Toggle checked status of task and save to local storage
  listBox.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      saveData();
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      saveData();
    }
  });
});

// This next function helps to display the data when next we open the browser again.

function showTask(){
    listBox.innerHTML = localStorage.getItem("data");
}
saveData();


