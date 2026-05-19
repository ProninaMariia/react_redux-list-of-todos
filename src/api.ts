import { Todo } from './types/Todo';
import { User } from './types/User';

const BASE_URL =
  'https://mate.academy/students-projects/react_dynamic-list-of-todos/api';

function get<T>(url: string): Promise<T> {
  return fetch(`${BASE_URL}${url}`).then((res: Response) => res.json());
}

export const getTodos = (): Promise<Todo[]> => get<Todo[]>('/todos');

export const getUser = (userId: number): Promise<User> =>
  new Promise(resolve => setTimeout(resolve, 0)).then(() =>
    get<User>(`/users/${userId}`),
  );
