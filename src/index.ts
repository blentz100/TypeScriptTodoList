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

//load all tasks from local storage on the initial page load
//note: it looks like it will only load tasks that were marked as completed
//solved: it was because i forgot to call saveTasks
const tasks: Task[] = loadTasks()
tasks.forEach(addListItem)

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
    completed: false,
    createdAt: new Date(),
  }
  tasks.push(newTask)
  saveTasks();

  addListItem(newTask)
    input.value = ""
})

function addListItem(task: Task){
  const item = document.createElement("li")
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked
    console.log(tasks)
    saveTasks()
  })
  checkbox.type = "checkbox"
  checkbox.checked = task.completed
  label.append(checkbox, task.title)
  item.append(label)
  list?.append(item)
}

function saveTasks(){
  localStorage.setItem("TASKS", JSON.stringify(tasks))
}

function loadTasks(): Task[]{
  const taskJSON = localStorage.getItem("TASKS")
  if(taskJSON == null) return []
  return JSON.parse(taskJSON)
}

