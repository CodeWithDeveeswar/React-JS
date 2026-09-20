import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";

const Content = () => {
  let [items, setItems] = useState([
    { id: 1, label: "HTML & CSS", checked: true },
    { id: 2, label: "JavaScript", checked: true },
    { id: 3, label: "React JS", checked: false },
  ]);

  return (
    <main>
      <div>
        <input type="text" />
        <button>Add</button>
      </div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id} className="item">
              <input type="checkBox" checked={item.checked} />
              <label>{item.label}</label>
              <FaTrashCan role="button" tabIndex={0} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Content;
