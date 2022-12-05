const tasks = [
    {
        id: "1138465078061",
        completed: false,
        text: "Посмотреть новый урок по JavaScript",
    },
    {
        id: "1138465078062",
        completed: false,
        text: "Выполнить тест после урока",
    },
    {
        id: "1138465078063",
        completed: false,
        text: "Выполнить ДЗ после урока",
    },
];

const createItems = (id, text) => {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";
    taskItem.dataset.taskId = id;
    const mainContainer = document.createElement("div");
    mainContainer.className = "task-item__main-container";
    const mainContent = document.createElement("div");
    mainContent.className = "task-item__main-content";
    const form = document.createElement("form");
    form.className = "task-item__form";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.className = "checkbox-form";
    input.id = `task-${id}`;
    const label = document.createElement("label");
    label.htmlFor = `task-${id}`;
    form.append(input);
    form.append(label);
    const span = document.createElement("span");
    span.className = "task-item__text";
    span.textContent = text;
    mainContent.append(form);
    mainContent.append(span);
    const button = document.createElement("button");
    button.classList.add("task-item__delete-button", "default-button", "delete-button");
    button.dataset.deleteTaskId = id;
    button.textContent = "Удалить";
    mainContainer.append(mainContent);
    mainContainer.append(button);
    taskItem.append(mainContainer);
    return taskItem;
}

const tasksList = document.querySelector(".tasks-list");
const addItems = () => {
    tasks.forEach((task) => {
        const taskItem = createItems(task.id, task.text);
        tasksList.append(taskItem);
    });
}

addItems();