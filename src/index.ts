//console.log('Hello World from inside src/index.ts')
//import { v4 as uuidV4} from 'uuid'
//console.log('this is the uuid: ' , uuidV4());

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("new-task-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("#new-task-title")

console.log('list:' , list)
console.log('form:' , form)
console.log('input:' , input)

