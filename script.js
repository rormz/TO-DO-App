( () => {
    
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
    const deleteTask = document.createElement("i");
    deleteTask.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    taskContent.appendChild(deleteTask);
    
    const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
  //task.innerHTML = content;
  task.appendChild(taskContent);

  list.appendChild(task);
};

btn.addEventListener("click", createTask);

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);

    return i;
};

const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
};

})();