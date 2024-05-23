import { proficient } from "../../Dummy/proficient";
import RightUpArrowButton from "../Button/RightUpArrowButton";

const Proficient = () => {
  return (
    <>
      <div className="text-center mt-10">
        <p className="text-3xl text-white">Proficient in</p>
        <div className="flex justify-center gap-x-5 mt-4">
          {proficient.map((data, key) => {
            return (
              <div key={key} className="flex ">
                <RightUpArrowButton url={data.url} text={data.skill} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Proficient;
