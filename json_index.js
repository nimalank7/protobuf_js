const fs = require("fs")

const employees = []

employees.push({
    "name": "Josh",
    "Salary": 1000,
    "id": 1
})

const sam = {
    "name": "Sam",
    "Salary": 1000,
    "id": 2
}

employees.push(sam)
employees.push({
    "name": "Rick",
    "Salary": 1000,
    "id": 3
})

console.log(JSON.stringify(employees))
fs.writeFileSync("employees.json", JSON.stringify(employees));