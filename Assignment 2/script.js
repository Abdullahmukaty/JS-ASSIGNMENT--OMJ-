

let username = prompt("Enter Usename")

let gmail = (`${username}@gmail.com`)

console.log(gmail)

console.log(username.toUpperCase())


// const number = prompt("Enter a number to generate its multiplication table:");
// const table = document.getElementById('mathtable');

// for (let i = 1; i <= 10; i++) {
//     const row = table.insertRow(i - 1);
//     const cell = row.insertCell(0);
//     cell.innerHTML = `${number} * ${i} = ${number * i}`;
// }

const number = prompt("Enter Number to Generate its Multiplication Table ")

for (let i = 0; i <= 80; i++) {
    let result = `${number} * ${i} = ${number *i}`
    console.log(result)
}

