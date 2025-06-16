import { useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useMailStore } from "../store/userMailStore";
import { FaRobot } from "react-icons/fa";
import { generateEmailResponse } from "../services/gptReply";
import { IoIosSend } from "react-icons/io";

export const Mail = () => {
  const navigate = useNavigate();
  const { selectedMail } = useMailStore();
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const addSentMail = useMailStore((state) => state.addSentMail);

  const handleBack = () => navigate(-1);

  const { title, username, mail, body } = selectedMail;

  const handleReplyClick = async () => {
    try {
      setLoading(true);
      const response = await generateEmailResponse(body);
      setReply(response);
    } catch (error) {
      console.error(error);
      setReply("Hubo un error al generar la respuesta.");
    } finally {
      setLoading(false);
    }
  };

  const handleSendClick = () => {
    if (!reply.trim()) return;
    const newMail = {
      title: `Re: ${title}`,
      username: "Jose Luis Herrera",
      mail: "herrera.clip@gmail.com",
      body: reply,
    };
    addSentMail(newMail);
    setReply("");
    alert("Correo enviado con exito");
  };

  return (
    <div className="w-full h-full bg-[#2c2c2c] rounded-4xl pt-3 text-gray-400">
      <div className="flex items-center px-8 mb-3">
        <button onClick={handleBack} className="mr-6">
          <IoReturnUpBack size={20} />
        </button>
      </div>

      <div className="w-full h-[90%] bg-white px-[5%] pt-9 overflow-y-scroll">
        <h1 className="text-black text-2xl mb-2.5">{title}</h1>
        <div className="flex items-center gap-3 mb-3">
          <div className="flex flex-wrap items-end gap-1.5">
            <p className="text-black font-bold">{username}</p>
            <p className="text-[0.8rem] text-gray-500">{mail}</p>
          </div>
        </div>
        <p className="text-gray-900 text-[1.1rem] mb-6">{body}</p>

        <div className="flex items-center gap-3 mb-3 mt-10">
          <div className="flex flex-wrap items-end gap-1.5">
            <p className="text-black font-bold">Jose Luis Herrera</p>
            <p className="text-[0.8rem] text-gray-500">
              herrera.clip@gmail.com
            </p>
          </div>
        </div>

        <textarea
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="Escribe tu respuesta aquí o genera una con ChatGPT..."
          rows={6}
          className="text-gray-900 text-[1.1rem] border border-gray-300 w-full p-3 rounded-md resize-none"
        />

        <div className="flex items-center gap-3.5 mt-4">
          <button
            onClick={handleSendClick}
            disabled={loading || !reply.trim()}
            className="flex items-center gap-2.5 text-white font-semibold py-2.5 px-5 rounded-full bg-blue-700 disabled:opacity-50"
          >
            <p>{loading ? "Enviando..." : "Enviar"}</p>
            <IoIosSend />
          </button>

          <button
            onClick={handleReplyClick}
            disabled={loading}
            className="flex items-center gap-2.5 border border-gray-700 text-gray-800 font-semibold py-2.5 px-5 rounded-full hover:bg-gray-200 disabled:opacity-50"
          >
            <p>
              {loading ? "Generando respuesta..." : "Responder con ChatGPT"}
            </p>
            <FaRobot />
          </button>
        </div>
      </div>
    </div>
  );
};
