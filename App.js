import "./App.css";
import { incNumber, decNumber, add } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  // it alternative to the useContext hooks in react / consumer from context API
  const changeTheNumber = useSelector((state) => state.changeTheNumber);

  const dispatch = useDispatch();
  const handleAddUser = () => {
    const user = { id: Math.random(), name };
    dispatch(add({ newUser: user }));
    // dispatch(AddNote({ title, text }))
    setName("");
    console.log(user);
  };

  return (
    <div className="App">
      <>
        {/* <ContactForm onSubmit={submit} /> */}
        <div className="main-div">
          <div className="container">
            <h1>Increment/Decrement counter</h1>
            <h4>using React and Redux</h4>

            <div className="quantity">
              <button
                className="quantity__minus"
                title="Decrement"
                onClick={() => dispatch(decNumber())}
              >
                <span>-</span>
              </button>
              {/* <input
                name="quantity"
                type="text"
                class="quantity__input"
                value={changeTheNumber}
              /> */}
              <h1>{changeTheNumber}</h1>
              <button
                className="quantity__plus"
                title="Increment"
                onClick={() => dispatch(incNumber(1))}
              >
                <span>+</span>
              </button>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <button
                className="text"
                title="Increment"
                onClick={handleAddUser}
              >
                <span>add</span>
              </button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
