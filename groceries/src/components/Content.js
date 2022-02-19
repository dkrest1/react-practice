import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main className="main">
      {items.length ? (
        <ItemList
          items={items}
          hanleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ textAlign: "center" }}>Your list is empty</p>
      )}
    </main>
  );
};

export default Content;
