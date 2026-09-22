import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { IoSaveSharp } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";

const TodoApp = () => {
  let [items, setItems] = useState([
    { id: 1, label: "HTML & CSS", checked: true },
    { id: 2, label: "JavaScript", checked: true },
    { id: 3, label: "React JS", checked: false },
  ]);

  let [newItem, setNewItem] = useState("");
  let [isEditing, setIsEditing] = useState(false);
  let [currentEleID, setCurrentEleID] = useState(null);

  let handleChecked = (id) => {
    let newListItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });

    setItems(newListItems);
  };

  let handleAddOrSaveItem = () => {
    if (isEditing) {
      let newListItems = items.map((item) => {
        return item.id === currentEleID ? { ...item, label: newItem } : item;
      });
      setItems(newListItems);
      setCurrentEleID(null);
      setNewItem("");
      setIsEditing(false);
    } else {
      setItems([
        ...items,
        { id: items.length + 1, label: newItem, checked: false },
      ]);
      setNewItem("");
    }
  };

  let handleUpdate = (id) => {
    let listItem = items.find((item) => item.id === id);
    setNewItem(listItem.label);
    setIsEditing(true);
    setCurrentEleID(id);
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
          {isEditing ? (
            <IoSaveSharp color="green" />
          ) : (
            <IoAddCircle color="blue" />
          )}
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

              <FaEdit
                id="edit"
                role="button"
                tabIndex={0}
                onClick={() => handleUpdate(item.id)}
              />

              <FaTrashCan
                id="delete"
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

export default TodoApp;
