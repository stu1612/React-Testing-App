// npm
import ReactDOM from "react-dom";
// components
import ModalForm from "./ModalForm";

export default function Modal({ listState, modalState }) {
  const [isModal] = modalState;

  // Safeguard
  if (isModal === false) return null;

  return ReactDOM.createPortal(
    <div className="modal-background">
      <div className="modal">
        <h2>Add new item</h2>
        <ModalForm listState={listState} modalState={modalState} />
      </div>
    </div>,
    document.body
  );
}
