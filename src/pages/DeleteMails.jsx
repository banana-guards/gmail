import { CardMail } from "../components/CardMail/CardMail";
import { useNavigate } from "react-router";
import { FaTrashAlt } from "react-icons/fa";
import { useMailStore } from "../store/userMailStore";

export const DeleteMails = () => {
  const deletedEmails = useMailStore((state) => state.deletedEmails);
  const deleteSelectedMails = useMailStore(
    (state) => state.deleteSelectedMails
  );
  const setSelectedMail = useMailStore((state) => state.setSelectedMail);
  const navigate = useNavigate();

  const handleClick = (mail) => {
    setSelectedMail(mail);
    navigate("/inbox");
  };

  return (
    <div className="w-full h-full bg-[#2c2c2c] rounded-4xl pt-3 text-gray-400">
      <div className="flex justify-between items-center px-8 mb-6">
        <div className="flex items-center">
          <button onClick={deleteSelectedMails}>
            <FaTrashAlt size={15} />
          </button>
        </div>
      </div>
      <div className="w-full h-[90%] overflow-y-scroll">
        {deletedEmails.map((mail) => (
          <CardMail
            key={mail.id}
            onClick={() => handleClick(mail)}
            mail={mail}
          />
        ))}
      </div>
    </div>
  );
};
