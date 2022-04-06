// npm
import ReactDOM from "react-dom";
// components
import ModalForm from "./ModalForm";

export default function Modal({ modalState, listState }) {
  const [isModal, setIsModal] = modalState;

  if (isModal === false) return null;
  return ReactDOM.createPortal(
    <div className="modal-background">
      <ModalForm modalState={modalState} listState={listState} />
    </div>,
    document.body
  );
}
