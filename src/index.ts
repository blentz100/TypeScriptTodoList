//console.log('Hello World from inside src/index.ts')
import { v4 as uuidV4} from 'uuid'
//console.log('this is the uuid: ' , uuidV4());

type Task = {
  id: string
  title: string
  completed: boolean
  createdAt: Date
}
const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("new-task-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("#new-task-title")

console.log('list:' , list)
console.log('form:' , form)
console.log('input:' , input)

form?.addEventListener("submit", e => {
  e.preventDefault()

  //the ? is called optional chaining
  //if this thing exists, give me the value, if not return undefined
  if(input?.value == "" || input?.value == null) return
  
  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed:false,
    createdAt: new Date()
  }

  addListItem(newTask)

})

function addListItem(task: Task){

}


