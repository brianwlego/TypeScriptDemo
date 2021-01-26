import { Router } from 'express'
import { Todo } from '../model/todo'



const todos:Todo[]  = [];

const router = Router();

router.get('/', (req, res, next) => {
  res.status(200).json({ todos: todos})
})
router.post('/todo', (req, res, next) => {
  const newTodo:Todo = {
    id: new Date().toISOString(), 
    text: req.body.text
  }
  todos.push(newTodo)
})
router.put('/todo/:id', (req, res, next) => {
  const tid = req.params.id
  const todoIdx = todos.findIndex(item => item.id === tid)
  if (todoIdx >= 0){
    todos[todoIdx] = { id:todos[todoIdx].id, text: req.body.text }
  } else {
    res.status(404).json({message: "Todo not valid"})
  }

})


export default router;