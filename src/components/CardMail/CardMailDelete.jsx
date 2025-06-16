import { useMemo } from "react";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";
import "./CardMail.css";
import { useMailStore } from "../../store/userMailStore";

export const CardMail = ({ mail, onClick }) => {
  const { id, username, title, body, date } = mail;
  const setSelectMail = useMailStore((state) => state.setSelectMails);
  const selectMails = useMailStore((state) => state.selectMails);

  const isSelected = useMemo(() => selectMails.includes(id), [selectMails, id]);

  const handleSelect = (e) => {
    e.stopPropagation();
    setSelectMail(id);
  };

  return (
    <article
      className={`flex items-center border-t border-gray-500 w-full py-2 last:border-b cursor-pointer ${
        isSelected ? "bg-blue-600" : "bg-transparent"
      }`}
    >
      <button onClick={handleSelect}>
        {isSelected ? (
          <MdOutlineCheckBox className="ml-8 mr-7 cursor-pointer" size={20} />
        ) : (
          <MdOutlineCheckBoxOutlineBlank
            className="ml-8 mr-7 cursor-pointer"
            size={20}
          />
        )}
      </button>
      <h1
        onClick={onClick}
        className="text-white font-medium w-[8%] mr-1.5 text-ellipsis max-[559px]:w-full"
      >
        {username}
      </h1>
      <h2
        onClick={onClick}
        className="text-white px-2 w-[10%] overflow-hidden text-nowrap text-ellipsis max-[959px]:w-full max-[559px]:hidden"
      >
        {title}
      </h2>
      <p className="max-[559px]:hidden" onClick={onClick}>
        -
      </p>
      <p
        onClick={onClick}
        className="truncate px-2 w-[55%] text-gray-400 max-[959px]:hidden"
      >
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
