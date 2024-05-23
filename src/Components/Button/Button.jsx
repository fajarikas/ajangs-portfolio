import { useNavigate } from "react-router-dom";

const Button = ({ text, link }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(link)}
      className="bg-green text-white px-5 py-2 rounded-md"
    >
      {text}
    </button>
  );
};

export default Button;
