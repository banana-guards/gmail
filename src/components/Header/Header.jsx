import { useState } from "react";
import Logo from "../../assets/logo.png";
import Perfil from "../../assets/user.png";
import { useNavigate } from "react-router";
import { ModalHeader } from "./ModalHeader";

export const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    navigate("/");
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <header className="flex justify-between items-center h-16 py-1.5 pl-3.5 pr-7 bg-[#131314] text-white">
      <button className="h-full w-[120px]" onClick={handleLogoClick}>
        <img className="h-full w-auto object-contain" src={Logo} alt="Logo" />
      </button>

      <div className="flex items-center">
        <button className="h-9 aspect-square" onClick={openModal}>
          <img
            className="h-full w-auto object-cover rounded-full"
            src={Perfil}
            alt="Perfil"
          />
        </button>
      </div>
      <ModalHeader isOpen={isOpen} closeModal={closeModal} />
    </header>
  );
};
