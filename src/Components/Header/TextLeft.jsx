const TextLeft = ({ title }) => {
  return (
    <div className="flex items-center justify-between ">
      <p className="text-white text-xl md:text-4xl font-semibold">{title}</p>
      <div className="bg-green w-9/12 md:w-10/12 h-1.5 rounded-full ml-2"></div>
    </div>
  );
};

export default TextLeft;
