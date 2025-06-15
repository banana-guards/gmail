import Modal from "react-modal";
import { useMailStore } from "../../../store/userMailStore";
import { useState } from "react";

Modal.setAppElement("#root");

export const WriteButtonModal = ({ isOpen, onRequestClose }) => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const addSentMail = useMailStore((state) => state.addSentMail);

  const handleSend = () => {
    if (!to || !subject || !body) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const newMail = {
      id: Date.now(),
      username: "Tú",
      mail: to,
      title: subject,
      body,
      date: new Date().toLocaleDateString("es-ES"),
    };

    addSentMail(newMail);
    setTo("");
    setSubject("");
    setBody("");
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Nuevo Mensaje"
      className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-lg mx-auto mt-20"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start"
    >
      <h2 className="text-xl font-bold mb-4">Mensaje nuevo</h2>

      <input
        type="email"
        placeholder="Para"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-2"
      />
      <input
        type="text"
        placeholder="Asunto"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-2"
      />
      <textarea
        placeholder="Escribe tu mensaje..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4 h-32 resize-none"
      />

      <div className="flex justify-end space-x-2">
        <button
          onClick={onRequestClose}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Cancelar
        </button>
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Enviar
        </button>
      </div>
    </Modal>
  );
};
