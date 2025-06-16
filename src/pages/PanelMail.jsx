import { CardMail } from "../components/CardMail/CardMail";
import { useNavigate } from "react-router";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect } from "react";
import { useMailStore } from "../store/userMailStore";

export const PanelMail = () => {
  const { mails, fetchMails } = useMailStore();
  const selectMails = useMailStore((state) => state.selectMails);
  const deleteSelectedMails = useMailStore(
    (state) => state.deleteSelectedMails
  );
  const setSelectedMail = useMailStore((state) => state.setSelectedMail);

  const handleClick = (mail) => {
    setSelectedMail(mail);
    navigate("/inbox");
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetchMails();
  }, []);

  return (
    <div className="w-full h-full bg-[#2c2c2c] rounded-4xl pt-3 text-gray-400">
      <div className="flex justify-between items-center px-8 mb-6">
        <div className="flex items-center gap-3">
          <button onClick={deleteSelectedMails}>
            <FaTrashAlt size={15} />
          </button>
          <span className="text-sm">{selectMails.length} seleccionados</span>
        </div>
      </div>
      <div className="w-full h-[90%] overflow-y-scroll">
        {mails.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            No hay correos recibidos.
          </p>
        ) : (
          mails
            .map((mail) => (
              <CardMail
                key={mail.id}
                mail={mail}
                onClick={() => handleClick(mail)}
              />
            ))
            .reverse()
        )}
      </div>
    </div>
  );
};
