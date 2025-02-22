
let tasks = [];

let List = "To-Do List Menu";
let add = "Add task(end)";
let start = "Add Task(Start)";
let remove = "Remove last task";
let removefirst = "Remove First Task";
let specific = "Remove Specific Task";
let update = "update task";
let view = "view tasks";
let exit = "Exit";

let options = [List, add, start, remove, removefirst, specific, update, view, exit];
let choice = prompt("Choose an option:\n" + options.join("\n"));

while (choice !== exit) {
    if (choice === add) {
        let task = prompt("Enter the task to add at the end:");
        tasks.push(task);
        console.log("Task added at the end");
    } else if (choice === start) {
        let task = prompt("Enter the task to add at the start:");
        tasks.unshift(task);
        console.log("Task added at the start");
    } else if (choice === remove) {
        tasks.pop();
        console.log("Last task removed");
    } else if (choice === removefirst) {
        tasks.shift();
        console.log("First task removed");
    } else if (choice === specific) {
        let index = prompt("Enter the index of the task to remove:");
        if (index >= 0 && index < tasks.length) {
            tasks.splice(index, 1);
            console.log("Specific task removed");
        } else {
            console.log("Invalid index");
        }
    } else if (choice === update) {
        let index = prompt("Enter the index of the task to update:");
        if (index >= 0 && index < tasks.length) {
            let newTask = prompt("Enter the new task:");
            tasks[index] = newTask;
            console.log("Task updated");
        } else {
            console.log("Invalid index");
        }
    } else if (choice === view) {
        console.log("Tasks:");
        tasks.forEach((task, index) => {
            console.log(`${index}: ${task}`);
        });
    } else {
        console.log("Invalid option");
    }

    choice = prompt("Choose an option:\n" + options.join("\n"));
}

console.log("Exiting");

