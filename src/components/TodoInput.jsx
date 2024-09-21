import PropTypes from "prop-types";

export default function TodoInput(props) {
  const { addtodo, todoval, settodoval } = props;
  const handleEnterkey = (e) => {
    if (e.key == "Enter") {
      addtodo(todoval);
      settodoval("");
    }
  };
  return (
    <header>
      <input
        value={todoval}
        onChange={(e) => {
          settodoval(e.target.value);
        }}
        placeholder="Enter task"
        onKeyDown={handleEnterkey}
      />
      <button
        onClick={() => {
          addtodo(todoval);
          settodoval("");
        }}
      >
        Add+
      </button>
    </header>
  );
}

TodoInput.propTypes = {
  addtodo: PropTypes.func.isRequired,
  todoval: PropTypes.func.isRequired,
  settodoval: PropTypes.func.isRequired,
};
