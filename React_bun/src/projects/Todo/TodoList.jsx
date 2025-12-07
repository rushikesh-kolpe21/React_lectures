export const TodoList = ({ data, handleDelButton }) => {
  return (
    <li>
      {data}
      <button onClick={() => handleDelButton(data)}>Del</button>
    </li>
  );
};
