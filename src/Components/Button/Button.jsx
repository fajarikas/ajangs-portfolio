import { useNavigate } from "react-router-dom";

const Button = ({ text, onClick }) => {
  const navigate = useNavigate();
  return (
    <button
      // onClick={() => navigate(link)}
      onClick={onClick}
      className="bg-green hover:bg-none border-green text-white text-sm px-5 py-2 rounded-md"
    >
      {text}
    </button>
  );
};

export default Button;
