export const NavbarButton = ({ icon: Icon, text }) => {
  return (
    <button className="flex items-center gap-2 h-full w-full pl-8 focus:bg-[#595959] hover:bg-[#414141] rounded-r-full">
      <Icon />
      <p className="max-[592px]:hidden">{text}</p>
    </button>
  );
};
