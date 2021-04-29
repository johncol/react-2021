const fetchTodo = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return await response.json();
};

export const jsonPlaceholderApi = {
  fetchTodo,
};
