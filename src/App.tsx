import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { setTodos } from "./features/todos";
import { setLoading } from "./features/features/loading";
import { getTodos } from "./api";

export const App = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);
  const loading = useAppSelector((state) => state.loading);

  useEffect(() => {
    const fetchTodos = async () => {
      dispatch(setLoading(true));
      const todosFromApi = await getTodos();
      dispatch(setTodos(todosFromApi));
      dispatch(setLoading(false));
    };
    fetchTodos();
  }, [dispatch]);

  return (
    <div>
      <h1>Todo List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
