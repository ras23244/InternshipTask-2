// ----------------------------
// Contact Form Validation
// ----------------------------

const form = document.getElementById("contactForm");
const error = document.getElementById("error");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        error.textContent = "Name is required";
        return;
    }

    if (email === "") {
        error.textContent = "Email is required";
        return;
    }

    if (!emailPattern.test(email)) {
        error.textContent = "Enter a valid email";
        return;
    }

    if (message === "") {
        error.textContent = "Message cannot be empty";
        return;
    }

    error.style.color = "green";
    error.textContent = "Form Submitted Successfully!";

    form.reset();

});


// ----------------------------
// Dynamic To-Do List
// ----------------------------

const addTask = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", function () {

    const task = taskInput.value.trim();

    if (task === "") {
        alert("Enter a task");
        return;
    }

    const li = document.createElement("li");

    li.textContent = task;

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.className = "delete";

    deleteBtn.onclick = function () {

        li.remove();

    };

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";

});