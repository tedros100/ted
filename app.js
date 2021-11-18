import React, { useState } from "react";

function App() {
  // const [fName, setFName] = useState("");
  // const [lName, setLName] = useState("");
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });
  function handleChange(event) {
    // const newValue = event.target.value
    // const inputName = event.target.name
    const { value, name } = event.target;
    // creating an object using function so we can display both names
    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  // function updateFName(event) {
  //   const firstName = event.target.value;
  //   setFName(firstName);
  // }

  // function updateLName(event) {

  // const lastName = event.target.value;
  //   setLName(lastName);
  // }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          onplaceholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
