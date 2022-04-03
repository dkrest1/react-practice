import { FaPlus } from "react-icons/fa";

const Addtem = () => {
  return (
    <form className="addForm">
      <label htmlFor="addItem"></label>
      <input
        autoFocus
        type="text"
        required
        id="addItem"
        placeholder="Add Item"
      />
      <button type="submit" aria-label="Add Item">
        <FaPlus />
      </button>
    </form>
  );
};

export default Addtem;
