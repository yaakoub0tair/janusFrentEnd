

document.addEventListener("DOMContentLoaded", async function() {
    const dropDown = document.querySelector("#dropDown");
    const habits = await getHabits();

    // build drop down
    console.log(habits);

    habits.forEach((habit) => {
        const option = document.createElement("option");
        option.value = habit.id;
        option.innerText = habit.title;
        dropDown.appendChild(option);
    });

    dropDown.addEventListener("change", async function(e) {
        
        const tableBody = document.querySelector("tbody");
        const logs = await getLogsOfHabits(e.target.value);
        console.log(logs);
        const toDay = new Date();
        for (i = 0; i < 7; i++) {
            const row = document.createElement("tr");
            const cell = document.createElement("td");

            cell.textContent = new Date(toDay).setDate(i * -1);
            // console.log()
            row.appendChild(cell)
            tableBody.appendChild(row)
        }
    });

});