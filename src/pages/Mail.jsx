import { useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useMailStore } from "../store/userMailStore";
import { FaRobot } from "react-icons/fa";
import { generateEmailResponse } from "../services/gptReply";

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
      const request = await generateEmailResponse(body);
      setReply(request);

      const newMail = {
        title: `Re: ${title}`,
        username: "Jose Luis Herrera",
        mail: "herrera.clip@gmail.com",
        body: request,
      };
      addSentMail(newMail);
    } catch (error) {
      console.error(error);
      setReply("Hubo un error al generar la respuesta.");
    } finally {
      setLoading(false);
    }
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

        {reply && (
          <>
            <div className="flex items-center gap-3 mb-3 mt-10">
              <div className="flex flex-wrap items-end gap-1.5">
                <p className="text-black font-bold">Jose Luis Herrera</p>
                <p className="text-[0.8rem] text-gray-500">
                  herrera.clip@gmail.com
                </p>
              </div>
            </div>
            <p className="text-gray-900 text-[1.1rem] whitespace-pre-line">
              {reply}
            </p>
          </>
        )}

        <button
          onClick={handleReplyClick}
          disabled={loading}
          className="flex items-center gap-2.5 border border-gray-700 text-gray-800 font-semibold py-2 px-5 rounded-full hover:bg-gray-200 mt-8"
        >
          <p>{loading ? "Generando respuesta..." : "Responder con chatgpt"}</p>
          <FaRobot />
        </button>
      </div>
    </div>
  );
};
