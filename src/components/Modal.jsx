// npm
import ReactDOM from "react-dom";
import { useContext } from "react";
// components
import ModalForm from "./ModalForm";
import { TaskContext } from "../contexts/TaskContext";

export default function Modal() {
  const { isModal } = useContext(TaskContext);

  if (isModal === false) return null;

  return ReactDOM.createPortal(
    <div className="modal-background">
      <ModalForm />
    </div>,
    document.body
  );
}
