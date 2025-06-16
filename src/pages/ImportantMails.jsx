import { CardMail } from "../components/CardMail/CardMail";
import { useNavigate } from "react-router";
import { FaTrashAlt } from "react-icons/fa";
import { useMailStore } from "../store/userMailStore";

export const ImportantMails = () => {
  const importantMails = useMailStore((state) => state.importantMails);
  const deleteSelectedMails = useMailStore(
    (state) => state.deleteSelectedMails
  );
  const selectMails = useMailStore((state) => state.selectMails);
  const setSelectedMail = useMailStore((state) => state.setSelectedMail);
  const navigate = useNavigate();

  const handleClick = (mail) => {
    setSelectedMail(mail);
    navigate("/inbox");
  };

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
        {importantMails.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            No hay correos importantes.
          </p>
        ) : (
          importantMails
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
