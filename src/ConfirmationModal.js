import React, { useImperativeHandle, useRef } from "react";

const ConfirmationModal = ({ isOpen, onClose }, ref) => {
  const closeRef = useRef();
  const confirmRef = useRef();
  const denyRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      focusCloseButton: () => closeRef.current.focus(),
      focusConfirmButton: () => confirmRef.current.focus(),
      focusDenyButton: () => denyRef.current.focus(),
    };
  });

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal" ref={ref}>
      <button className="close-btn" ref={closeRef} onClick={onClose}>
        &times;
      </button>
      <div className="modal-header">
        <h3>Title</h3>
      </div>
      <div className="modal-body">Do you confirm?</div>
      <div className="modal-footer">
        <button className="confirm-btn" ref={confirmRef} onClick={onClose}>
          Yes
        </button>
        <button className="deny-btn" ref={denyRef} onClick={onClose}>
          No
        </button>
      </div>
    </div>
  );
};

export default React.forwardRef(ConfirmationModal);
