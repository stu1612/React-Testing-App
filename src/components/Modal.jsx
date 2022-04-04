// npm
import ReactDOM from "react-dom";
// components
import ModalForm from "./ModalForm";

export default function Modal({ isModal, setIsModal, lists, setLists }) {
  if (isModal === false) return null;

  return ReactDOM.createPortal(
    <div className="modal-background">
      <ModalForm lists={lists} setLists={setLists} setIsModal={setIsModal} />
      <button
        onClick={() => {
          setIsModal(false);
        }}
      >
        Close Modal
      </button>
    </div>,
    document.body
  );
}
