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
})

export default router;