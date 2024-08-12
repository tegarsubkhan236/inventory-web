import { useState } from 'react'
import { Todo } from '../../../../domain/model/auth.ts'
import { TodoRepositoryImpl } from '../../../../data/repository/TodoRepositoryImpl.ts'
import TodoAPIDataSourceImpl from '../../../../data/datasource/api/TodoAPIDataSourceImpl.ts'

export default function TodoListViewModel() {
  const [todos, setTodos] = useState<Todo[]>()

  const UseCase = new GetTodoUsecase(new TodoRepositoryImpl(new TodoAPIDataSourceImpl()))
}
