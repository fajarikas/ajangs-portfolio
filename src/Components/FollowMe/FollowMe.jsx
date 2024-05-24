import { socmed } from "../../Dummy/socmed"; // Adjust the import path accordingly

const FollowMe = () => {
  return (
    <>
      <div className="text-center mt-10">
        <p className="text-blackd dark:text-white font-semibold text-lg">
          Follow Me<span className="text-green"> Here</span>
        </p>
        <div className="flex justify-center gap-x-5 mt-4">
          {socmed.map((data, key) => (
            <a
              key={key}
              href={data.url}
              target={data.url}
              rel="noreferrer"
              className="text-black  dark:text-white text-2xl md:text-4xl dark:hover:text-green hover:text-green transition-colors ease-in-out  hover:-translate-y-1 hover:scale-110  delay-100 cursor-pointer"
            >
              <data.icon />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default FollowMe;
