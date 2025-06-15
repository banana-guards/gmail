import { CardMail } from "../components/CardMail/CardMail";
import { useNavigate } from "react-router";
import { FaTrashAlt } from "react-icons/fa";
import { useMailStore } from "../store/userMailStore";

export const FeaturedMails = () => {
  const featuredEmails = useMailStore((state) => state.featuredEmails);
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
        {featuredEmails.map((mail) => (
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
