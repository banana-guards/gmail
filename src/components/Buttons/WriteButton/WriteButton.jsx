import { useState } from "react";
import { WriteButtonModal } from "./WriteButtonModal";
import { HiPencil } from "react-icons/hi";

export const WriteButton = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <button
        className="flex items-center justify-center text-[#5f6368] bg-white rounded-2xl ml-3.5 mb-5 w-[60%] h-14 max-[592px]:w-[90%] max-[592px]:m-0 max-[592px]:ml-1 max-[592px]:mb-3"
        onClick={openModal}
      >
        <HiPencil size={21} />
        <p className="font-medium max-[592px]:hidden ml-2">Redactar</p>
      </button>

      <WriteButtonModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </>
  );
};
