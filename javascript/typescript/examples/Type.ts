// TypeDefinition
type Employee = {
     id: string;
     name: string;
     address?: string; // Optional
     phone?: string | null;
};

// TypeAnotation
var age: number = 32; // number variable
var name: string = "John";// string variable
var isUpdated: boolean = true;// Boolean variable

var employee1 : {
    id: number;
    name: string;
};

employee1 = {
    id: 100,
    name : "John"
}

var employee2: Employee = {
    id: 101,
    name: "Steve"
}

function display(id:number, name:string)
{
    console.log("Id = " + id + ", Name = " + name);
}


// TypeInterface

var arr = [0, 1, "test"];
arr.push("str") // OK
arr.push(true); // Compiler Error: Argument of type 'true' is not assignable to parameter of type 'string | number'

function sum(a: number, b: number )
{
    return a + b;
}
var total: number = sum(10,20); // OK
var str: string = sum(10,20); // Compiler Error


// TypeAssertion

let code: any = 123;
let employeeCode = <number> code;
console.log(typeof(employeeCode)); //Output: number



