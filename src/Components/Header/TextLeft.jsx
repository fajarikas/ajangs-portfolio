const TextLeft = ({ title }) => {
  return (
    <div className="flex text-black dark:text-white items-center justify-between ">
      <p className=" text-lg md:text-4xl font-semibold">{title}</p>
      <div className="bg-green w-9/12 md:w-10/12 h-1.5 rounded-full ml-2"></div>
    </div>
  );
};

export default TextLeft;
