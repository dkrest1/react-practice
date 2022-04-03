import { useState } from "react";
import Header from "./Header";
import Addtem from "./Addtem";
import Content from "./Content";
import Footer from "./Footer";
function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "this is one pound of coacoa",
    },
    {
      id: 2,
      checked: false,
      item: "this is two pound of rice",
    },
    {
      id: 3,
      checked: false,
      item: "this is three pound of eba",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };
  return (
    <div className="App ">
      <Header title="Grocery List" />
      <Addtem />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
