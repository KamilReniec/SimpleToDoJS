let task;
let item;
const toDoList = [];

while (task !== "quit") {
    task = prompt("What do You want to do?");
    if (task === "new") {
        item = prompt("Add new item to list:");
        toDoList.push(item);
        console.log('You add new item to the list');
    } else if (task === "list") {
        let i = 0;
        console.log("///////////////////");
        for (const notes in toDoList) {
            console.log(`${i}. ${toDoList[notes]}`);
            i++;
        }
        console.log("///////////////////");
    } else if (task === "delete") {
        item = -1;
        while (item < 0 || item >= toDoList.length || item == "empty") {
            item = prompt("Choose the number of the item to delete:")
            if (item >= toDoList.length || item < 0) {
                console.log("Wrong number. Try again.")
            } else {
                toDoList.splice(item, 1);
                console.log(`You delete element ${item}`);
                break;
            }
        }

    } else if (task === "quit") {
        console.log("Nice to see You. You are exit.")
    } else {
        console.log("invalid command");
    }
}