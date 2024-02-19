let inputField = document.getElementById("input");
let listContainer = document.getElementById("list_container");


function addTask() {
  if(inputField.value === ''){
    alert("Write something");
  }
  else{
    let li = document.createElement('li');
    li.innerHTML = inputField.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = '❌';
    li.appendChild(span);
  }
  inputField.value = '';
  saveData()
}

listContainer.addEventListener('click', (e)=> {
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  // Store the innerHTML of listContainer in local storage
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  // Retrieve and set the innerHTML from local storage
  listContainer.innerHTML = localStorage.getItem("data") || '';
}

showData();
