const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const task = document.createElement("li"); /* creamos el elemento li para luego añadirlo como hijo a ul con appendChild*/
    task.classList.add("card"); /* le añadimos la clase que tenía antes a través del método classList.add */
    const list = document.querySelector("[data-list]");
    input.value = "";
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`;
  task.innerHTML = content;

  list.appendChild(task);

    console.log(content);
};

btn.addEventListener("click", createTask);