import PropTypes from "prop-types";

export default function TodoCard(props) {
  const { children, deletetodo, index, edittodo } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            edittodo(index);
          }}
        >
          <i className="fas fa-edit" />
        </button>
        <button
          onClick={() => {
            deletetodo(index);
          }}
        >
          <i className="fa-solid fa-trash-can" />
        </button>
      </div>
    </li>
  );
}
TodoCard.propTypes = {
  children: PropTypes.node.isRequired,
  deletetodo: PropTypes.func.isRequired,
  edittodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
