const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);

        const span = document.createElement("span");
        span.textContent = "x";
        li.appendChild(span);
    }
    inputBox.value = "";
    savedata();
    showTask();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    savedata();
}, false);

function savedata() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");

    const tasks = listContainer.getElementsByTagName("li");
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        if (task.classList.contains("checked")) {
            task.classList.add("checked");
        }
    }
}

showTask();
