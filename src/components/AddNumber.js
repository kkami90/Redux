import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { increase } from "../store";

const AddNumber = () => {
  const [size, setSize] = useState(1);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Add Number</h1>
      <input type="button" value="+" onClick={() => dispatch(increase(size))} />
      <input
        type="text"
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}
      />
    </div>
  );
};

export default AddNumber;
