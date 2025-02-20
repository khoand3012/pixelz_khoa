import { useState } from "react";
import "./App.scss";
import Modal from "./components/Modal";

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <>
      <h1>Vite + React + Typescript</h1>
      <div className="card">
        <button onClick={() => setDisplayModal(true)}>Open Modal</button>
      </div>
      <p>Click on the button to open the modal</p>
      {displayModal && <Modal onClose={() => setDisplayModal(false)} />}
    </>
  );
}

export default App;
