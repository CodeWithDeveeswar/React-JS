import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const Content = () => {
  let [items, setItems] = useState([
    { id: 1, label: "HTML & CSS", checked: true },
    { id: 2, label: "JavaScript", checked: true },
    { id: 3, label: "React JS", checked: false },
  ]);

  let [newItem, setNewItem] = useState("");

  let [isEditing, setIsEditing] = useState(false);

  let handleChecked = (id) => {
    let newListItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });

    setItems(newListItems);
  };

  let handleAddOrSaveItem = () => {
    setItems([
      ...items,
      { id: items.length + 1, label: newItem, checked: false },
    ]);
  };

  let handleUpdate = () => {
    setIsEditing(true);
  };

  let handleDelete = (id) => {
    let newItems = items
      .filter((item) => item.id !== id)
      .map((item, index) => {
        return { ...item, id: index + 1 };
      });

    setItems(newItems);
  };

  return (
    <main>
      <div>
        <input
          type="text"
          value={newItem}
          placeholder="Add New Item"
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
        <button onClick={handleAddOrSaveItem}>
          {isEditing ? "Save" : "Add"}
        </button>
      </div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id} className="item">
              <input
                type="checkBox"
                checked={item.checked}
                onChange={() => handleChecked(item.id)}
              />
              <label>{item.label}</label>
              <FaEdit role="button" tabIndex={0} onClick={handleUpdate} />
              <FaTrashCan
                role="button"
                tabIndex={0}
                onClick={() => {
                  handleDelete(item.id);
                }}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Content;
