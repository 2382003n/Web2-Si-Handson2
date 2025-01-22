let age: number = 25;
let name: string = "John Doe";
let isActive: boolean = true;
let notFound: null = null;
let notDefined: undefined = undefined;
let anything: any = "Nuel Sitorus";
anything = 30;

let salary = 5000; // Typescript akan menganggap ini sebagai number
let message = "Hello" // Typescript akan menganggap ini sebagai string 

// contoh penggunaan void
function logMessage(): void{
    console.log("Ini adalah fungsi void")
    // tidak ada return value
}

// Undefined Vs null 
let a = null;

let b;
console.log(b);
export {};