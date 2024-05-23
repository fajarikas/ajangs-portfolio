import { Link } from "react-router-dom";

const NavbarMenu = ({ url, name, number }) => {
  return (
    <Link
      to={url}
      className="mx-5 text-sm flex md:block space-x-2 md:space-x-0 hover:text-green hover:-rotate-12 transition text-grey delay-50"
    >
      <div className="">{number}</div>
      <div>{name}</div>
    </Link>
  );
};
export default NavbarMenu;
