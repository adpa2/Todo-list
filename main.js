const input = document.querySelector("input");
const button = document.querySelector("button");
const numberOfTasks = document.querySelector(".toDoList__number span");
const tasksHolder = document.querySelector(".toDoList__tasks_holder");

button.addEventListener("click", () => {
    const taskText = input.value.trim();

    if (taskText !== "") {
        const ulList = tasksHolder.querySelector("ul");
        const taskItem = document.createElement("li");

        taskItem.innerHTML = `
          <h4>${taskText}</h4>
          <div>
            <img src="img/trash.png" alt="trash" class="deleteButton" onclick="deleteTask(this)">
          </div>
        `;

        if (!ulList) {
            const newUlList = document.createElement("ul");
            tasksHolder.innerHTML = "";
            newUlList.appendChild(taskItem);
            tasksHolder.appendChild(newUlList);
        } else {
            ulList.appendChild(taskItem);
        }

        input.value = "";
        updateTaskCount();
    }
});

function deleteTask(deleteButton) {
    const taskItem = deleteButton.closest("li");
    if (taskItem) {
        taskItem.remove();
        updateTaskCount();
    }
}

function updateTaskCount() {
    const ulList = tasksHolder.querySelector("ul");
    const count = ulList ? ulList.children.length : 0;
    numberOfTasks.textContent = count;
    if (count === 0) {
        tasksHolder.innerHTML = `
            <img src="img/clipboard.png" alt="clipboard">
            <p>
               <strong>Your tasks</strong> <br>
                will appear here
            </p>
        `;
    }
}