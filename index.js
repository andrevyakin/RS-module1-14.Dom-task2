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

const elementFactory = (element, parameters) => {
    const el = document.createElement(element);
    if (parameters.className)
        Array.isArray(parameters.className)
            ? parameters.className.forEach(i => el.classList.add(i))
            : el.className = parameters.className;
    if (parameters.dataset)
        el.dataset[parameters.dataset.name] = parameters.dataset.value;
    if (parameters.type)
        el.type = parameters.type;
    if (parameters.id)
        el.id = parameters.id;
    if (parameters.htmlFor)
        el.htmlFor = parameters.htmlFor;
    if (parameters.text)
        el.textContent = parameters.text;
    return el;
}

const createItems = (id, text) => {
    const taskItem = elementFactory("div", {
        className: "task-item",
        dataset: {
            name: "taskId",
            value: id
        }
    });
    const mainContainer = elementFactory("div", {
        className: "task-item__main-container"
    });
    taskItem.append(mainContainer);
    const mainContent = elementFactory("div", {
        className: "task-item__main-content"
    });
    mainContainer.append(mainContent);
    const form = elementFactory("form", {
        className: "task-item__form"
    });
    mainContent.append(form);
    const input = elementFactory("input", {
        className: "checkbox-form__checkbox",
        type: "checkbox",
        id: `task-${id}`
    });
    form.append(input);
    const label = elementFactory("label", {
        htmlFor: `task-${id}`
    });
    form.append(label);
    const span = elementFactory("span", {
        className: "task-item__text",
        text
    });
    mainContent.append(span);
    const button = elementFactory("button", {
        className: ["task-item__delete-button", "default-button", "delete-button"],
        dataset: {
            name: "deleteTaskId",
            value: id
        },
        text: "Удалить"
    });
    mainContainer.append(button);
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