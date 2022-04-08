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
      <ModalForm listState={listState} modalState={modalState} />
    </div>,
    document.body
  );
}
