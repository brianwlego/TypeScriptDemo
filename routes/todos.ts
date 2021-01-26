import { Router } from 'express'
import { type } from 'os';
import { Todo } from '../model/todo'



let todos:Todo[]  = [];

type RequestBody = {text: string}
type RequestParams = {id: string}

const router = Router();

router.get('/', (req, res, next) => {
  res.status(200).json({ todos: todos})
})

router.post('/todo', (req, res, next) => {
  const body = req.body as RequestBody
  const newTodo:Todo = {
    id: new Date().toISOString(), 
    text: body.text
  }
  todos.push(newTodo)

  res.status(201).json({message: 'Added Todo', todos: todos})
})

router.put('/todo/:id', (req, res, next) => {
  const params = req.params as RequestParams
  const tid = params.id
  const todoIdx = todos.findIndex(item => item.id === tid)
  if (todoIdx >= 0){
    todos[todoIdx] = { id:todos[todoIdx].id, text: req.body.text }
    res.status(200).json({message: 'Updated Todo', todos: todos})
  } else {
    res.status(404).json({message: "Could not find todo for this id"})
  }
})

router.delete('/todo/:id', (req, res, next) => {
  todos = todos.filter(t => t.id !== req.params.id)
  res.status(200).json({message: 'Todo deleted'})
})


export default router;