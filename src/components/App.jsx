import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingName, setHeadingName] = useState("");

  function handleOnChnage(event) {
    setName(event.target.value);
  }

  function handleOnClick(event) {
    setHeadingName(name);

    //The below code prevet the form below to be refreshed and removing the name which was rendered
    event.preventDefault();
  }

  return (
    <div className="container">
      <form>
        <h1>Hello {headingName}</h1>
        <input
          onChange={handleOnChnage}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button onClick={handleOnClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
