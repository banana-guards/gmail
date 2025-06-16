import { useMailStore } from "../store/userMailStore";
import { FaTrashAlt } from "react-icons/fa";
import { CardMail } from "../components/CardMail/CardMailDelete";
import { useNavigate } from "react-router";

export const DeleteMails = () => {
  const deletedEmails = useMailStore((state) => state.deletedEmails);
  const permanentlyDeleteMails = useMailStore(
    (state) => state.permanentlyDeleteMails
  );
  const setSelectedMail = useMailStore((state) => state.setSelectedMail);
  const selectMails = useMailStore((state) => state.selectMails);

  const navigate = useNavigate();

  const handleClick = (mail) => {
    setSelectedMail(mail);
    navigate("/inbox");
  };

  return (
    <div className="w-full h-full bg-[#2c2c2c] rounded-4xl pt-3 text-gray-400">
      <div className="flex justify-between items-center px-8 mb-6">
        <div className="flex items-center gap-3">
          <button onClick={permanentlyDeleteMails}>
            <FaTrashAlt size={15} />
          </button>
          <span className="text-sm">{selectMails.length} seleccionados</span>
        </div>
      </div>

      <div className="w-full h-[90%] overflow-y-scroll">
        {deletedEmails.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            No hay correos eliminados.
          </p>
        ) : (
          deletedEmails
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
