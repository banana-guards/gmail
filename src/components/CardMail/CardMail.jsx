import { useMemo, useState } from "react";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";
import { FiStar } from "react-icons/fi";
import { MdLabelImportantOutline } from "react-icons/md";
import "./CardMail.css";
import { useMailStore } from "../../store/userMailStore";

export const CardMail = ({ mail, onClick }) => {
  const { id, username, title, body, date } = mail;
  const [isStarred, setIsStarred] = useState(false);
  const [isImportant, setIsImportant] = useState(false);
  const setSelectMail = useMailStore((state) => state.setSelectMails);
  const selectMails = useMailStore((state) => state.selectMails);
  const markAsImportant = useMailStore((state) => state.markAsImportant);
  const markAsFeatured = useMailStore((state) => state.markAsFeatured);

  const isSelected = useMemo(() => selectMails.includes(id), [selectMails, id]);

  const handleSelect = (e) => {
    e.stopPropagation();
    setSelectMail(id);
  };

  const handleStarClick = (e) => {
    e.stopPropagation();
    setIsStarred(!isStarred);
    markAsFeatured(mail);
  };

  const handleImportantClick = (e) => {
    e.stopPropagation();
    setIsImportant(!isImportant);
    markAsImportant(mail);
  };

  return (
    <article
      className={`flex items-center border-t border-gray-500 w-full py-2 last:border-b cursor-pointer ${
        isSelected ? "bg-blue-600" : "bg-transparent"
      }`}
    >
      <button onClick={handleSelect}>
        {isSelected ? (
          <MdOutlineCheckBox className="ml-8 mr-1.5" size={20} />
        ) : (
          <MdOutlineCheckBoxOutlineBlank className="ml-8 mr-1.5" size={20} />
        )}
      </button>

      <button onClick={handleStarClick}>
        <FiStar
          className={`mr-1.5 ${
            isStarred ? "text-yellow-400" : "text-gray-400"
          }`}
          size={20}
        />
      </button>

      <button onClick={handleImportantClick}>
        <MdLabelImportantOutline
          className={`mr-3 ${
            isImportant ? "text-yellow-400" : "text-gray-400"
          }`}
          size={20}
        />
      </button>

      <h1 onClick={onClick} className="text-white font-medium w-[7%] mr-1.5">
        {username}
      </h1>
      <h2
        onClick={onClick}
        className="text-white px-2 w-[10%] overflow-hidden text-nowrap text-ellipsis"
      >
        {title}
      </h2>
      <p onClick={onClick}> - </p>
      <p onClick={onClick} className="truncate px-2 w-[55%] text-gray-400">
        {body}
      </p>
      <div
        onClick={onClick}
        className="flex items-center flex-1 justify-end mr-2.5 text-white font-semibold text-sm"
      >
        <p>{date}</p>
      </div>
    </article>
  );
};
