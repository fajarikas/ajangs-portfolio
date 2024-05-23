import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const RightUpArrowButton = ({ url, text }) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => navigate(url)}
        className="flex text-white items-center space-x-1.5 hover:scale-110 hover:-rotate-6 transition delay-50"
      >
        <p>{text}</p>
        <FiArrowUpRight className="text-green" />
      </button>
    </>
  );
};

export default RightUpArrowButton;
