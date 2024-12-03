const Schema = require("./employees_pb")
const fs = require("fs")

/*
`protoc` created a set of functions from employees.proto (e.g. setId, setName) as well as methods to 
serialize the data into binary. Look in `employees_pb.js` for these methods
*/

//Here we create a new Employee
const sam = new Schema.Employee();
sam.setId(1001);
sam.setName("Sam");
sam.setSalary(1001);

console.log("My name is " + sam.getName())

const rick = new Schema.Employee();
rick.setId(1002);
rick.setName("Rick");
rick.setSalary(1002);

const james = new Schema.Employee();
james.setId(1003);
james.setName("James");
james.setSalary(1003);

/*
Create an employees array with addEmployees as an auto-generated function
*/
const employees = new Schema.Employees();
employees.addEmployees(sam)
employees.addEmployees(rick)
employees.addEmployees(james)

// Serializes the array into binary
const bytes = employees.serializeBinary()

/*
`Binary bytes are: 10,13,8,233,7,18,3,83,97,109,29,0,64,122,68,10,14,8,234,7,18,4,
82,105,99,107,29,0,128,122,68,10,15,8,235,7,18,5,74,97,109,101,115,29,0,192,122,68`
*/
console.log("Binary bytes are: " + bytes)

// Write the binary bytes to `employees.binary`
fs.writeFileSync("employees.binary", bytes)

// Deserialize the bytes into the Employees array
const employees2 = Schema.Employees.deserializeBinary(bytes)

// Output is `Deserializing: 1001,Sam,1001,1002,Rick,1002,1003,James,1003`
console.log("Deserializing: " + employees2.toString())