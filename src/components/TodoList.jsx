import PropTypes from "prop-types";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos } = props;
  return (
    <ol className="main">
      {todos.map((todo, todoindex) => {
        return (
          <TodoCard {...props} key={todoindex} index={todoindex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ol>
  );
}
TodoList.propTypes = {
  todos: PropTypes.func.isRequired,
};
