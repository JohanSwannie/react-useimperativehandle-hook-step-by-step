import { useState, useRef } from "react";
import ConfirmationModal from "./ConfirmationModal";

function App() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef();

  return (
    <>
      <div className="app-btns">
        <button onClick={() => setOpen((prevSetOpen) => !prevSetOpen)}>
          Open
        </button>
        <button onClick={() => modalRef.current.focusCloseButton()}>
          Focus Close
        </button>
        <button onClick={() => modalRef.current.focusConfirmButton()}>
          Focus Confirm
        </button>
        <button onClick={() => modalRef.current.focusDenyButton()}>
          Focus Deny
        </button>
      </div>
      <ConfirmationModal
        ref={modalRef}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default App;
