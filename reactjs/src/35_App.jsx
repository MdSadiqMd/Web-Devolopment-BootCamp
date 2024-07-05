import React, { useState } from "react";

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

const App = () => {
  const [checked, setChecked] = useState([]);
  const [left, setLeft] = useState([0, 1, 2, 3]);
  const [right, setRight] = useState([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = (items) => (
    <div className="p-4 bg-white rounded shadow">
      <ul className="space-y-2">
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;
          return (
            <li key={value} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={labelId}
                onChange={() => handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                className="form-checkbox"
              />
              <label htmlFor={labelId} className="cursor-pointer">
                List Item {value + 1}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex space-x-8">
        <div className="w-64">{customList(left)}</div>
        <div className="flex flex-col space-y-4">
          <button
            onClick={handleAllRight}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            &gt;&gt;
          </button>
          <button
            onClick={handleRight}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            &gt;
          </button>
          <button
            onClick={handleLeft}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            &lt;
          </button>
          <button
            onClick={handleAllLeft}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            &lt;&lt;
          </button>
        </div>
        <div className="w-64">{customList(right)}</div>
      </div>
    </div>
  );
};

export default App;
