import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const task = document.createElement("li"); /* creamos el elemento li para luego añadirlo como hijo a ul con appendChild*/
    task.classList.add("card"); /* le añadimos la clase que tenía antes a través del método classList.add */
    const list = document.querySelector("[data-list]");
    input.value = "";
    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    
  //task.innerHTML = content;
  task.appendChild(taskContent);
  task.appendChild(deleteIcon());
  list.appendChild(task);
};

btn.addEventListener("click", createTask);