import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const RightArrowButton = ({ url, text }) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => navigate(url)}
        className="flex md:text-base text-sm text-black dark:text-white items-center space-x-2  hover:scale-110 hover:-rotate-6 transition delay-50"
      >
        <p>{text}</p>
        <FaArrowRightLong className="text-green" />
      </button>
    </>
  );
};

export default RightArrowButton;
