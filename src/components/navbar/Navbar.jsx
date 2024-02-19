import NavbarLeft from "./navbaritems/NavbarLeft";
import NavbarRight from "./navbaritems/NavbarRight";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-5">
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
};

export default Navbar;
