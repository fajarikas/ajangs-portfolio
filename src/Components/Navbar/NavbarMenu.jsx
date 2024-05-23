import { Link, useLocation, useParams } from "react-router-dom";

const NavbarMenu = ({ url, name, number }) => {
  const location = useLocation();
  const params = location.pathname;
  console.log("params", params);

  return (
    <Link
      to={url}
      className={`mx-5 text-sm flex md:block space-x-2 md:space-x-0 hover:text-green rotate-0 md:hover:-rotate-12 transition text-grey delay-50 ${
        params === url ? "text-green rotate-0 md:-rotate-12" : ""
      }`}
    >
      <div className="">{number}</div>
      <div>{name}</div>
    </Link>
  );
};
export default NavbarMenu;
