// 1. Array Destructuring

const numbers = [42, 65]
const [, y] = numbers;
 
console.log(y)




// 2. Object destructuring
const {age} = {name : "alu", age: 14}
{
    const {id, name, age} = { id: 12, name : "alu", age: 14}
    console.log(name)
}


const employee = {
    ide: 'VS Code',
    designation: 'Developer',
    machine: 'Windows',
    languages: ['HTML', 'CSS', 'JavaScript'],
    specification: {
        height: 66,
        weight: 67,
        address: 'Kishoreganj',
        drink: 'Water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'Casio'
        }
    }
}


const {machine, ide} = employee;
const {weight, address} = employee.specification;
const {brand} = employee.specification?.watch;

console.log(machine)
console.log(ide)
console.log(weight)
console.log(address)
console.log(brand)


 