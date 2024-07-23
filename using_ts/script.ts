// here is some TypeScript
let a:number | boolean = 1
let b = 'hello' // where possible, let Typescript infer the type
// typescript implicitly set the type of a to number
a = false // JS is happy to dynamically change the type
// what is the type of the array and its content?
// let c:number[] = [5,4,3,2]
let c:Array<number|string> = [5,4,'3',2]
// what is the data type of an object...
type x = {name:string | boolean} // 

interface Person { // interface is part of Typescript
     n:string
     a:number
     status:string
}

// better to use an interface
let d:Person = {n:'Floella', a:42, status:'admin'}
// we may do this
let e:{n:string, a:number, status:string} = {n:'Floella', a:42, status:'admin'}

// generics
const firstElement = <T>(arr:Array<T>):T=>{
    // return member zero from arr
    // if (typeof(arr))==string
    return arr[0]
}

const s = 'this is a string'
const n = [4,3,2]
const p = ['4','3','2']

console.log( firstElement(n) )
console.log( firstElement(p) )
