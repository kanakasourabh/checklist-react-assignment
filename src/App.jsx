import { useState } from "react";
import "./App.css";

function App() {
  const options = ["option1", "option2", "option3"];
  const [checkedOption, setCheckedOption] = useState([]);
  const handleChange = (option) => {
    if (checkedOption.includes(option)) {
      setCheckedOption(checkedOption.filter((item) => item !== option));
    } else {
      setCheckedOption([...checkedOption, option]);
    }
  };
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <div>
        <h2 style={{ marginBottom: "10px" }}>CheckList</h2>
        {options.map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              onChange={() => handleChange(option)}
              style={{ marginRight: "5px" }}
            />
            {option}
          </label>
        ))}
      </div>
      <div>
        <h2>Selected Options</h2>
        <ul style={{ listStyleType: "none", padding: "0" }}>
          {checkedOption?.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
