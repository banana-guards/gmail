import { IoFileTray } from "react-icons/io5";
import { FiStar } from "react-icons/fi";
import { MdLabelImportantOutline } from "react-icons/md";
import { MdSend } from "react-icons/md";
import { NavbarButton } from "./Buttons/NavBarButton";
import { Link } from "react-router";
import { FaTrashAlt } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-col text-white">
        <li className="w-full h-8">
          <Link to="/">
            <NavbarButton icon={IoFileTray} text={"Recibidos"} />
          </Link>
        </li>
        <li className="w-full h-8">
          <Link to="/destacados">
            <NavbarButton icon={FiStar} text={"Destacados"} />
          </Link>
        </li>
        <li className="w-full h-8">
          <Link to="/importantes">
            <NavbarButton icon={MdLabelImportantOutline} text={"Importantes"} />
          </Link>
        </li>
        <li className="w-full h-8">
          <Link to="/enviados">
            <NavbarButton icon={MdSend} text={"Enviados"} />
          </Link>
        </li>
        <li className="w-full h-8">
          <Link to="/eliminados">
            <NavbarButton icon={FaTrashAlt} text={"Eliminados"} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
